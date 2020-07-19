# 🍖 `useSpeechRecognition`

Uses the browser's SpeechRecognition API

## Arguments

- `onEnd: Function`: Called when SpeechRecognition stops listening.
- `onResult: Function(string)`: Called when SpeechRecognition has a result. It is called with a string containing a transcript of the recognized speech.
- `onError: Function(event)`: Called when SpeechRecognition has an error

## Returns

- `listen: Function({ interimResults: Bool, lang: String })`: Call to make the browser start listening for input. Every time it processes a result, it will forward a transcript to the provided onResult function.
  - `interimResults: Bool`: Default is true. SpeechRecognition can provide realtime results as it's trying to figure out the best match for the input. Set to false if you only want the final result.
  - `lang: string`: The language the SpeechRecognition will try to interpret the input in. Use the languageCode from this list of languages that Chrome supports: http://cloud.google.com/speech-to-text/docs/languages
  - `grammars`: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars
  - `continuous`: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous
  - `maxAlternatives`: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives
- `stop: Function()`: Makes SpeechRecognition stop listening. This will call the provided onEnd function as well.
- `listening: Bool`: Whether or not SpeechRecognition is actively listening
- `supported: Bool`: Whether or not the browser supports SpeechRecognition

## Usage

```js
import { useSpeechRecognition } from 'react-recipes';

function App() {
  const [value, setValue] = useState('');
  const [ended, setEnded] = useState(false);
  const onResult = (result) => setValue(result.join(''));
  const onEnd = () => setEnded(true);
  const { listen, listening, stop, supported } = useSpeechRecognition({ onEnd, onResult });

  if (!supported) {
    return 'Speech Recognition is not supported. Upgrade your browser';
  }

  const onListen = () => {
    listen({ lang: 'en-US', continuous: true });
  };

  return (
    <div>
      <textarea value={value} onChange={(event) => setValue(event.target.value)} />
      <button onMouseDown={onListen} onMouseUp={stop} type="button">
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
      <p>{ended && 'Speech has stoped listening'}</p>
    </div>
  );
}
```
