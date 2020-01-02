import { useEffect, useState } from 'react';

const noop = () => {};

const useSpeechSynthesis = (onEnd = noop) => {
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

  useEffect(() => {
    if (supported) {
      getVoices();
    }
  }, []);

  const speak = (args = {}) => {
    const {
      voice = null, text = '', rate = 1, pitch = 1,
    } = args;
    setSpeaking(true);
    // Firefox won't repeat an utterance that has been
    // spoken, so we need to create a new instance each time
    const utterance = new window.SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = voice;
    utterance.onend = handleEnd;
    utterance.rate = rate;
    utterance.pitch = pitch;
    window.speechSynthesis.speak(utterance);
  };

  const cancel = () => {
    setSpeaking(false);
    window.speechSynthesis.cancel();
  };

  return {
    supported,
    speak,
    speaking,
    cancel,
    voices,
  };
};

export default useSpeechSynthesis;


// usage

// function App() {
//   const [value, setValue] = useState('');
//   const [ended, setEnded] = useState(false);
//   const onEnd = () => setEnded(true);
//   const {
//     cancel,
//     speak,
//     speaking,
//     supported,
//     voices,
//   } = useSpeechSynthesis({ onEnd });

//   if (!supported) {
//     return 'Speech is not supported. Upgrade your browser';
//   }

//   return (
//     <div>
//       <textarea
//         value={value}
//         onChange={event => setValue(event.target.value)}
//       />
//       <button onClick={() => speak({ text: value, voice: voices[1] })}>Speak</button>
//       <button onClick={cancel}>Cancel</button>
//       <p>{speaking && 'Voice is speaking'}</p>
//       <p>{ended && 'Voice has ended'}</p>
//       <div>
//         <h2>Voices:</h2>
//         <div>
//           {voices.map(voice => <p key={voice}>{voice}</p>)}
//         </div>
//       </div>
//     </div>
//   );
// }
