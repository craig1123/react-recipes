import { useRef, useEffect, useState } from 'react';
import isClient from '../utils/isClient';

if (isClient) {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
}

const noop = () => {};

const useSpeechRecognition = (onEnd = noop, onResult = noop) => {
  const recognition = useRef(null);
  const [listening, setListening] = useState(false);
  const supported = !!window.SpeechRecognition || !!window.webkitSpeechRecognition;

  const processResult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');

    onResult(transcript);
  };

  const listen = (args = {}) => {
    if (listening) return;
    const { lang = '', interimResults = true } = args;
    setListening(true);
    recognition.current.lang = lang;
    recognition.current.interimResults = interimResults;
    recognition.current.onresult = processResult;
    // SpeechRecognition stops automatically after inactivity
    // We want it to keep going until we tell it to stop
    recognition.current.onend = () => recognition.current.start();
    recognition.current.start();
  };

  const stop = () => {
    if (!listening) return;
    recognition.current.onresult = () => {};
    recognition.current.onend = () => {};
    setListening(false);
    recognition.current.stop();
    onEnd();
  };

  useEffect(() => {
    if (!supported) return;

    recognition.current = new window.SpeechRecognition();
  }, []);

  return {
    listen,
    listening,
    stop,
    supported,
  };
};

export default useSpeechRecognition;


// usage

// function App() {
//   const [value, setValue] = useState('');
//   const [ended, setEnded] = useState(false);
//   const onResult = result => setValue(result);
//   const onEnd = () => setEnded(true);
//   const {
//     listen,
//     listening,
//     stop,
//     supported,
//   } = useSpeechRecognition({
//     onResult,
//     onEnd,
//   });

//   if (!supported) {
//     return 'Speech Recognition is not supported. Upgrade your browser';
//   }

//   const onListen = () => {
//     listen({ interimResults: true, lang: 'en-US' });
//   };

//   return (
//     <div>
//       <textarea
//         value={value}
//         onChange={event => setValue(event.target.value)}
//       />
//       <button onMouseDown={onListen} onMouseUp={stop}>
//         🎤
//       </button>
//       {listening && <div>Go ahead I'm listening</div>}
//       <p>{ended && 'Speech has stoped listening'}</p>
//     </div>
//   );
// }
