# 🍗 `useSpeechSynthesis`

Uses the browser's SpeechSynthesis API. It exposes the options and controls to the underlying SpeechSynthesis in the browser.

## Arguments

- `onEnd: Function`: Called when SpeechSynthesis finishes reading the text or is cancelled
- `onError: Function`: Called when SpeechSynthesis has an error
- `onBoundary: Function(event)`: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary
- `onPause: Function(event)`: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pause_event
- `onResume: Function(event)`: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/resume_event

## Returns

- `speak: Function({ text: string, voice: SpeechSynthesisVoice })`: Makes the browser read some text. You can change the voice by passing in a value from the voices array.
- `cancel: Function()`: Makes SpeechSynthesis stop reading
- `speaking: Bool`: Whether or not SpeechSynthesis is actively reading
- `supported: Bool`: Whether or not the browser supports SpeechSynthesis
- `voices: Array`: An array of available voices which can be passed to the speak function. In some browsers voices load asynchronously. In these cases, the array will be empty until they are available. An example SpeechSynthesisVoice voice has the following properties:
- `pause: Function()`: pause the SpeechSynthesis
- `resume: Function()`: resumes the SpeechSynthesis from the paused state

```json
{
  default: true
  lang: "en-AU"
  localService: true
  name: "Karen"
  voiceURI: "Karen"
}
```

## Usage

```js
import { useSpeechSynthesis } from 'react-recipes';

function App() {
  const [value, setValue] = useState('');
  const [ended, setEnded] = useState(false);
  const onBoundary = (event) => {
    console.log(`${event.name} boundary reached after ${event.elapsedTime} milliseconds.`);
  };
  const onEnd = () => setEnded(true);
  const onError = (event) => {
    console.warn(event);
  };

  const { cancel, speak, speaking, supported, voices, pause, resume } = useSpeechSynthesis({
    onEnd,
    onBoundary,
    onError,
  });

  if (!supported) {
    return 'Speech is not supported. Upgrade your browser';
  }

  return (
    <div>
      <textarea value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="button" onClick={() => speak({ text: value, voice: voices[1] })}>
        Speak
      </button>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
      <button type="button" onClick={pause}>
        Pause
      </button>
      <button type="button" onClick={resume}>
        Resume
      </button>
      <p>{speaking && 'Voice is speaking'}</p>
      <p>{ended && 'Voice has ended'}</p>
      <div>
        <h2>Voices:</h2>
        <div>
          {voices.map((voice) => (
            <p key={voice.name}>{voice.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
```
