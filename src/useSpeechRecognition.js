import {
  useRef, useEffect, useState, useCallback,
} from 'react';
import isClient from '../utils/isClient';

// original idea/source https://github.com/MikeyParton/react-speech-kit/blob/master/src/useSpeechRecognition.js

// https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
const useEventCallback = (fn, dependencies) => {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(
    (args) => {
      const func = ref.current;
      return func(args);
    },
    [ref],
  );
};

if (isClient) {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
}

const noop = () => {};

const useSpeechRecognition = (props = {}) => {
  const { onEnd = noop, onResult = noop, onError = noop } = props;
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const supported = !!window.SpeechRecognition || !!window.webkitSpeechRecognition;

  const processResult = (event) => {
    const transcriptArray = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript);
    onResult(transcriptArray);
  };

  const handleError = (event) => {
    if (event.error === 'not-allowed') {
      recognitionRef.current.onend = () => {};
      setListening(false);
    }
    onError(event);
  };

  const listen = useEventCallback(
    (args = {}) => {
      if (listening || !supported) return;
      const {
        lang = '', interimResults = true, continuous = false, maxAlternatives = 1, grammars,
      } = args;
      setListening(true);
      recognitionRef.current.lang = lang;
      recognitionRef.current.interimResults = interimResults;
      recognitionRef.current.onresult = processResult;
      recognitionRef.current.onerror = handleError;
      recognitionRef.current.continuous = continuous;
      recognitionRef.current.maxAlternatives = maxAlternatives;
      if (grammars) {
        recognitionRef.current.grammars = grammars;
      }
      // SpeechRecognition stops automatically after inactivity
      // We want it to keep going until we tell it to stop
      recognitionRef.current.onend = () => recognitionRef.current.start();
      recognitionRef.current.start();
    },
    [listening, supported, recognitionRef],
  );

  const stop = useEventCallback(() => {
    if (!listening || !supported) return;
    recognitionRef.current.onresult = () => {};
    recognitionRef.current.onend = () => {};
    recognitionRef.current.onerror = () => {};
    setListening(false);
    recognitionRef.current.stop();
    onEnd();
  }, [listening, supported, recognitionRef, onEnd]);

  useEffect(() => {
    if (!supported) return;

    recognitionRef.current = new window.SpeechRecognition();
  }, []);

  return {
    listen,
    listening,
    stop,
    supported,
  };
};

export default useSpeechRecognition;
