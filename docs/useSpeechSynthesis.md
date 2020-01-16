# 🍗 `useSpeechSynthesis`

Uses the browser's SpeechSynthesis API. It exposes the options and controls to the underlying SpeechSynthesis in the browser.

## Arguments

- `onEnd: Function`: Called when SpeechSynthesis finishes reading the text or is cancelled

## Returns

- `speak: Function({ text: string, voice: SpeechSynthesisVoice })`: Makes the browser read some text. You can change the voice by passing in a value from the voices array.
- `cancel: Function()`: Makes SpeechSynthesis stop reading
- `speaking: Bool`: Whether or not SpeechSynthesis is actively reading
- `supported: Bool`: Whether or not the browser supports SpeechSynthesis
- `voices: Array`: An array of available voices which can be passed to the speak function. In some browsers voices load asynchronously. In these cases, the array will be empty until they are available. An example SpeechSynthesisVoice voice has the following properties:
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
import { useSpeechSynthesis } from "react-recipes";

function App() {
  const [value, setValue] = useState('');
  const [ended, setEnded] = useState(false);
  const onEnd = () => setEnded(true);
  const {
    cancel,
    speak,
    speaking,
    supported,
    voices,
  } = useSpeechSynthesis({ onEnd });

  if (!supported) {
    return 'Speech is not supported. Upgrade your browser';
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value, voice: voices[1] })}>Speak</button>
      <button onClick={cancel}>Cancel</button>
      <p>{speaking && 'Voice is speaking'}</p>
      <p>{ended && 'Voice has ended'}</p>
      <div>
        <h2>Voices:</h2>
        <div>
          {voices.map(voice => <p key={voice}>{voice}</p>)}
        </div>
      </div>
    </div>
  );
}
```