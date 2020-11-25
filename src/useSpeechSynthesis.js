import { useEffect, useState } from 'react';

// original idea/source https://github.com/MikeyParton/react-speech-kit/blob/master/src/useSpeechSynthesis.jsx

const noop = () => {};

const useSpeechSynthesis = (props = {}) => {
  const {
    onBoundary, onEnd = noop, onError = noop, onPause = noop, onResume = noop,
  } = props;
  const [voices, setVoices] = useState([]);
  const [speaking, setSpeaking] = useState(false);
  const supported = !!window.speechSynthesis;

  const processVoices = (voiceOptions) => {
    setVoices(voiceOptions);
  };

  const getVoices = () => {
    // Firefox seems to have voices upfront and never calls the
    // voiceschanged event
    let voiceOptions = window.speechSynthesis.getVoices();
    if (voiceOptions.length > 0) {
      processVoices(voiceOptions);
      return;
    }

    window.speechSynthesis.onvoiceschanged = (event) => {
      voiceOptions = event.target.getVoices();
      processVoices(voiceOptions);
    };
  };

  const handleEnd = () => {
    setSpeaking(false);
    onEnd();
  };

  const handleError = (e) => {
    setSpeaking(false);
    onError(e);
  };

  const speak = (args = {}) => {
    const {
      voice = null, text = '', rate = 1, pitch = 1, volume = 1, lang = 'en-US', continuous = false,
    } = args;
    if (!supported) return;
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance();
    // Firefox won't repeat an utterance that has been
    // spoken, so we need to create a new instance each time
    utterance.lang = lang;
    utterance.text = text;
    utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    utterance.continuous = continuous;
    utterance.onend = handleEnd;
    utterance.onerror = handleError;
    utterance.onpause = onPause;
    utterance.onresume = onResume;
    if (onBoundary) {
      utterance.onboundary = onBoundary;
    }
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  const pause = () => {
    if (speaking && supported) {
      window.speechSynthesis.pause();
      setSpeaking(false);
    }
  };

  const resume = () => {
    if (!speaking && supported) {
      window.speechSynthesis.resume();
      setSpeaking(true);
    }
  };

  const cancel = () => {
    if (!supported) return;
    setSpeaking(false);
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    if (supported) {
      getVoices();
    }
    return () => {
      if (supported) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    supported,
    speak,
    speaking,
    voices,
    cancel,
    pause,
    resume,
  };
};

export default useSpeechSynthesis;
