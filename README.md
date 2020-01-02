<p align="center" style="color: #343a40">
  <img
    src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman-cook.png" 
    alt="react-recipes-logo" 
    height="150" 
    width="150"
    >
  <h1 align="center">React Recipes</h1>
</p>
<p align="center" style="font-size: 1.2rem;">A React Hooks utility library containing popular customized hooks</p>
<p align="center" style="font-size: 1.2rem;">What's your favorite dish?</p>

[![Build Status](https://travis-ci.com/craig1123/react-recipes.svg?branch=master)](https://travis-ci.com/craig1123/react-recipes)
![](https://badgen.net/npm/v/react-recipes)
![](https://badgen.net/bundlephobia/minzip/react-recipes)
![](https://badgen.net/npm/dt/react-recipes)
![](https://img.shields.io/badge/license-MIT-green.svg)

```bash
npm i react-recipes --save
```

```bash
yarn add react-recipes
```

## 🥘 Recipes

| Name                                                | Returns                                               | Arguments                                                                               |
| --------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 🍪 [`useCookie`](#-useCookie)                       | [cookieValue, updateCookie, deleteCookie]             | (cookieName, initialValue)                                                              |
| 🥠 [`useCopyClipboard`](#-usecopyclipboard)         | [isCopied, setIsCopied]                               | (duration: 2000)                                                                        |
| 🍩 [`useDarkMode`](#-useDarkMode)                   | [enabled, setEnabledState]                            | -                                                                                       |
| 🍜 [`useDebounce`](#-useDebounce)                   | debouncedValue                                        | (value, delay)                                                                          |
| 🥡 [`useDimensions`](#-useDimensions)               | [ref, dimensions, node]                               | (liveMeasure: true, delay: 250, initialDimensions: {}, effectDependencies: [])          |
| 🍳 [`useEventListener`](#-useEventListener)         | -                                                     | (eventName, handle, element: window)                                                    |
| 🌯 [`useGeolocation`](#-useGeolocation)             | { latitude, longitude, timestamp, accuracy, error }   | (watch: false, settings: {enableHighAccuracy: false, timeout: Infinity, maximumAge: 0}) |
| 🌭 [`useHover`](#-useHover)                         | [callbackRef, value]                                  | -                                                                                       |
| 🍦 [`useInterval`](#-useInterval)                   | [delay, ...effectDependencies]                        | (callback, delay, runOnLoad: false, effectDependencies: [])                             |
| 🍐 [`useIsClient`](#-useIsClient)                   | isClient                                              | -                                                                                       |
| 🥧 [`useKeyPress`](#-useKeyPress)                   | keyPressed                                            | (targetKey)                                                                             |
| 🍱 [`useLocalStorage`](#-useLocalStorage)           | [storedValue, setValue]                               | (key, initialValue)                                                                     |
| 🍋 [`useLockBodyScroll`](#-useLockBodyScroll)       | -                                                     | -                                                                                       |
| 🍉 [`useMedia`](#-useMedia)                         | value                                                 | (queries, values, defaultValue)                                                         |
| 🥭 [`useMultiKeyPress`](#-useMultiKeyPress)         | keysPressed                                           | (targetKey)                                                                             | 
| 🥑 [`useOnClickOutside`](#-useOnClickOutside)       | -                                                     | (ref, callback)                                                                         | 
| 🥒 [`useOnlineStatus`](#-useOnlineStatus)           | onlineStatus                                          | -                                                                                       | 
| 🍿 [`usePrevious`](#-usePrevious)                   | previous                                              | (value)                                                                                 |
| 🍣 [`useScript`](#-useScript)                       | [loaded, error]                                       | (src)                                                                                   |
| 🍖 [`useSpeechRecognition`](#-useSpeechRecognition) | { supported, listen, listening, stop }                | ({ onEnd })                                                                             |
| 🍗 [`useSpeechSynthesis`](#-useSpeechSynthesis)     | { supported, speak, speaking, cancel, voices }        | ({ onEnd, onResult })                                                                             |
| 🍏 [`useThrottle`](#-useThrottle)                   | throttledValue                                        | (value, ms: 250)                                                                        |
| 🍷 [`useWhyDidYouUpdate`](#-useWhyDidYouUpdate)     | -                                                     | (name, props)                                                                           |
| 🥖 [`useWindowScroll`](#-useWindowScroll)           | { x, y }                                              | -                                                                                       |
| 🥮 [`useWindowSize`](#-useWindowSize)               | { height, width }                                     | (initialWidth, initialHeight)                                                           |
| 🥝 [`useWorker`](#-useWorker)                       | worker instance                                       | (scriptPath, workerOptions, attributes)                                                 |

## Documentation

### 🍪 `useCookie`

Create, read, or delete cookies (mmmm...cookie)

#### Arguments

- `cookieName: String`: Name of cookie
- `initialValue?: String`: First value of cookie

#### Returns

- `cookieValue: String`: Current value of the cookie
- `updateCookie: Function(string)`: Set a new value of the cookie
- `deleteCookie: Function()`: Bye bye cookie

```js
import { useCookie } from "react-recipes";

const App = () => {
  const [userToken, setUserToken, deleteUserToken] = useCookie('token', '0');

  render(
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken('123')}>Change token</button>
      <button onClick={() => deleteUserToken()}>Delete token</button>
    </div>
  );
};
```


### 🥠 `useCopyClipboard`

Copies any string to the clipboard

#### Arguments

- `duration?: Number`: Duration of "on/success" state, default is `2000`.

#### Returns

- `isCopied: Bool`: true when string was copied for the length of the duration.
- `setIsCopied: Function(string)`: Copies the string to the clipboard

```js
import { useCopyClipboard } from "react-recipes";

const App = () => {
  const [isCopied, setIsCopied] = useCopyClipboard();

  const copy = () => {
    setIsCopied("This string is copied");
  };

  return (
    <button onClick={copy} type="button">
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
};
```

### 🍩 `useDarkMode`

Toggles (and saves to localStorage) dark mode

#### Returns

- `darkMode: Bool`: true when dark.
- `setDarkMode: Function()`: Toggles darkMode

```js
import { useDarkMode } from "react-recipes";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
}
```

### 🍜 `useDebounce`

Debounce any fast changing value

#### Arguments

- `value: Any`: value to be debounced
- `delay: Number`: Delay of debounce

#### Returns

- `debouncedValue: Any`: Equal to the value passed in

```js
import { useDebounce } from "react-recipes";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then(results => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  ...
};
```

### 🥡 `useDimensions`

Gives the dimensions of any element

#### Arguments

- `liveMeasure?: Bool`: Adds scroll and resize events to always have the latest dimensions, default is `true`.
- `delay?: Number`: delay for debounce calculation, default is `250`.
- `initialDimensions?: Object`: Default dimensions before the calculation. Default is `{}`.
- `effectDependencies?: Array`: List of effects to re-call useLayoutEffect, default is `[]`.

#### Returns

- `ref: Ref`: Give this ref to the element needing the calculation
- `dimensions: Object`: All of the element's dimensions
- `node: Node`: The Element

```js
import { useDimensions } from "react-recipes";

function App() {
  const [wrapperRef, dimensions] = useDimensions();

  return (
    <div ref={wrapperRef}>
      height: {dimensions.height}
      width: {dimensions.width}
    </div>
  );
}
```

### 🍳 `useEventListener`

Adds an event listener

#### Arguments

- `eventName: String`: Name of event. Required.
- `handler: Function`: Callback function. Required.
- `element?: Element`: Element to attach the eventListener, default is `window`.

```js
import { useEventListener } from "react-recipes";

function App() {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener("mousemove", handler);

  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}
```

### 🌯 `useGeolocation`

Gets and watches for the geolocation of the user

#### Arguments

- `watch?: Bool`: set it to true to follow the location. Default is `false`
- `settings: Object`: position options
  - settings.enableHighAccuracy: indicates the application would like to receive the most accurate results (default false),
  - settings.timeout: maximum length of time (in milliseconds) the device is allowed to take in order to return a position (default Infinity),
  - settings.maximumAge: the maximum age in milliseconds of a possible cached position that is acceptable to return (default 0).

#### Returns

- `position: Object`:
  - latitude
  - longitude
  - timestamp: the time when their location was given
  - accuracy: how accuate the geolocation is
  - error: Any error with getting the geolocation

```js
import { useGeolocation } from "react-recipes";

function App() {
  const { latitude, longitude, timestamp, accuracy, error } = useGeolocation(
    true
  );

  return (
    <code>
      latitude: {latitude}
      longitude: {longitude}
      timestamp: {timestamp}
      accuracy: {accuracy && `${accuracy}m`}
      error: {error}
    </code>
  );
}
```

### 🌭 `useHover`

Know when the mouse if hovering over an element

#### Returns

- `hoverRef: Ref`: add this to the desired hover element
- `isHovered: Bool`: Whether or not the mouse is currently hovering over element

```js
import { useHover } from "react-recipes";

function App() {
  const [hoverRef, isHovered] = useHover();

  return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}
```

### 🍦 `useInterval`

Makes `setInterval` way easier

#### Arguments

- `callback: Function`: Callback after each interval
- `delay: Number`: delay time between each callback invocation
- `runOnLoad?: Bool`: Whether or not to run interval on mount, default is false.
- `effectDependencies?: Array`: List of effects to re-call callback, default is `[]`.

#### Returns

- `isCopied: Bool`: true when string was copied for the length of the duration.
- `setIsCopied: Function`: Copies the string to the clipboard

```js
import { useInterval } from "react-recipes";

const App = () => {
  // Grabs user data every 7500ms or when user changes
  useInterval(() => {
    if (user) {
      getUserInfo(user);
    }
  }, 7500, true, [user]);

  ...
};
```


### 🍐 `useIsClient`

Check if the javascript is loaded from the web client

#### Returns

- `isClient: Bool`: true when window is available. False when server side rendered

```js
import { useIsClient } from "react-recipes";

const App = () => {
  const isClient = useIsClient();

  return <div>{isClient && "client side rendered"}</div>;
};
```

### 🥧 `useKeyPress`

Adds keydown/keyup listeners to any key

#### Arguments

- `targetKey: String`: A key on the keyboard. Required

#### Returns

- `keyPressed: Bool`: true on keydown are the targetKey.

```js
import { useKeyPress } from "react-recipes";

function App() {
  const happyPress = useKeyPress("h");

  return <div>{happyPress && "😊"}</div>;
}
```

### 🍱 `useLocalStorage`

Store and set values into localStorage

#### Arguments

- `key: String`: A unique key to be stored in localStorage
- `initialValue: String`: Value to be used the first time for localStorage

#### Returns

- `storedValue: String`: Value in localStorage
- `setValue: Function`: Set a new value to localStorage

```js
import { useLocalStorage } from "react-recipes";

function App() {
  // Similar to useState but first arg is key to the value in local storage.
  const [name, setName] = useLocalStorage("name", "Bob");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}
```

### 🍋 `useLockBodyScroll`

Locks the scrolling - used for things like modals

```js
import { useLockBodyScroll } from "react-recipes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen && (
      <Modal title="The title" onClose={() => setIsOpen(false)}>
        Great modal content!
      </Modal>
    )
  );
}

function Modal({ title, children, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}
```

### 🍉 `useMedia`

Media Queries for Javascript

#### Arguments

- `queries: Array`: List of Media Query strings
- `values: Array`: List of values tha correlates to the query list
- `defaultValue: Any`: default value of media query

#### Returns

- `value: Any`:

```js
import { useMedia } from "react-recipes";

function App() {
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );
  const columnCount = useMedia(
    // Media queries
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );

  let columnHeights = new Array(columnCount).fill(0);
  let columns = new Array(columnCount).fill().map(() => []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}
```

### 🥭 `useMultiKeyPress`

Listens for mulitple keypresses at a time

#### Returns

- `keysPressed: Set`: A set a keys currently pressed

```js
import { useMultiKeyPress } from "react-recipes";

function App() {
  const keysPressed = useMultiKeyPress();

  return <div>{[...keysPressed].map(key => `${key} key pressed`)}</div>;
}
```

### 🥑 `useOnClickOutside`

Event listener for clicking outside of an element

#### Arguments

- `ref: Ref`: Click outside of this element
- `callback: Function`: Called on click outside

```js
import { useOnClickOutside } from "react-recipes";

function App() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
}
```


### 🥒 `useOnlineStatus`

Subscribe to online/offline events and the navigator.onLine property to see current status


```js
import { useOnlineStatus } from "react-recipes";

function App() {
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}
```


### 🍿 `usePrevious`

Returns the previously set value

#### Arguments

- `value: Any`: The current value (next value to save)

#### Returns

- `previous: Any`: The previous value

```js
import { usePrevious } from "react-recipes";

function App() {
  const [count, setCount] = useState(0);
  
  // Get the previous value (was passed into hook on last render)
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
   );
}
```


### 🍣 `useScript`

Creates a script tag and loads the script

#### Arguments

- `src: String`: The source url to the script

#### Returns

- `loaded: Bool`: Did the script load?
- `error: Bool`: Did the script error out?

```js
import { useScript } from "react-recipes";

function App() {
  const [loaded, error] = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  );

  return (
    <div>
      <div>
        Script loaded: <b>{loaded.toString()}</b>
      </div>
      {loaded && !error && (
        <div>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  );
}
```


### 🍗 `useSpeechRecognition`

Uses the browser's SpeechRecognition API

#### Arguments

- `onEnd: Function`: Called when SpeechRecognition stops listening.
- `onResult: Function(string)`: Called when SpeechRecognition has a result. It is called with a string containing a transcript of the recognized speech.

#### Returns

- `listen: Function({ interimResults: Bool, lang: String })`: Call to make the browser start listening for input. Every time it processes a result, it will forward a transcript to the provided onResult function.
  - `interimResults: Bool`: Default is true. SpeechRecognition can provide realtime results as it's trying to figure out the best match for the input. Set to false if you only want the final result.
  - `lang: string`: The language the SpeechRecognition will try to interpret the input in. Use the languageCode from this list of languages that Chrome supports ![(here)](https://cloud.google.com/speech-to-text/docs/languages)
- `stop: Function()`: Makes SpeechRecognition stop listening. This will call the provided onEnd function as well.
- `listening: Bool`: Whether or not SpeechRecognition is actively listening
- `supported: Bool`: Whether or not the browser supports SpeechRecognition

```js
import { useSpeechRecognition } from "react-recipes";

function App() {
  const [value, setValue] = useState('');
  const [ended, setEnded] = useState(false);
  const onResult = result => setValue(result);
  const onEnd = () => setEnded(true);
  const {
    listen,
    listening,
    stop,
    supported,
  } = useSpeechRecognition({
    onResult,
    onEnd,
  });

  if (!supported) {
    return 'Speech Recognition is not supported. Upgrade your browser';
  }

  const onListen = () => {
    listen({ interimResults: true, lang: 'en-US' });
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onMouseDown={onListen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
      <p>{ended && 'Speech has stoped listening'}</p>
    </div>
  );
}
```


### 🍗 `useSpeechSynthesis`

Uses the browser's SpeechSynthesis API. It exposes the options and controls to the underlying SpeechSynthesis in the browser.

#### Arguments

- `onEnd: Function`: Called when SpeechSynthesis finishes reading the text or is cancelled

#### Returns

- `speak: Function({ text: string, voice: SpeechSynthesisVoice })`: Makes the browser read some text. You can change the voice by passing in a value from the voices array.
- `cancel: Function()`: Makes SpeechSynthesis stop reading
- `speaking: Bool`: Whether or not SpeechSynthesis is actively reading
- `speaking: Bool`: Whether or not the browser supports SpeechSynthesis
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


### 🍏 `useThrottle`

Throttles a value

#### Arguments

- `value: Any`: The value to be throttled
- `ms: Number`: The time in milliseconds to throttle

#### Returns

- `throttledValue: Any`: The returned value after the throttling

```js
import { useThrottle } from "react-recipes";

const App = ({ value }) => {
  const throttledValue = useThrottle(value, 250);

  return (
    <>
      <div>Value: {value}</div>
      <div>Throttled value: {throttledValue}</div>
    </>
  );
};
```


### 🍷 `useWhyDidYouUpdate`

Console logs the reason for why a component updated

#### Arguments

- `name: String`: Name this log
- `props: Object`: Component props from parent

```js
import { useWhyDidYouUpdate } from "react-recipes";

// Let's pretend this <Counter> component is expensive to re-render so ...
// ... we wrap with React.memo, but we're still seeing performance issues :/
// So we add useWhyDidYouUpdate and check our console to see what's going on.
const Counter = React.memo(props => {
  useWhyDidYouUpdate('Counter', props);
  return <div style={props.style}>{props.count}</div>;
});
```

### 🥖 `useWindowScroll`

Re-renders on window scroll.

#### Returns
- `state: Object`
  - `x: Number`: Horizontal location
  - `y: Number`: Vertical location

```js
import { useWindowScroll } from "react-recipes";

const App = () => {
  const { x, y } = useWindowScroll();

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};
```


### 🥮 `useWindowSize`

Gets the window size and listens for resizes

#### Arguments

- `src: String`: The source url to the script

#### Returns

- `loaded: Bool`: Did the script load?
- `error: Bool`: Did the script error out?

```js
import { useWindowSize } from "react-recipes";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width}px / {height}px
    </div>
  );
}
```

### 🥝 `useWorker`

Easy function to set up workers

#### Arguments

- `scriptPath: String`: Path to the script file that a new Worker is to be created with
- `workerOptions: Object`: `onMessage` and `onMessageError` options can be passed to communicate with the worker
- `attributes: Object`: Event handlers to attach to the worker

#### Returns

- `worker: Worker`: The worker instance

```js
import { useWorker } from "react-recipes";

function App() {
  const [value, setValue] = useState(0);
  useWorker('/worker.js', {
    onMessage: (e) => {
      console.log('message received from worker');
      console.log(e.data);
      setValue(e.data);
    },
    onMessageError: (e) => {
      console.log(e);
    },
  });

  return value;
}
```
