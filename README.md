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

![](https://img.shields.io/badge/license-MIT-green.svg)

```bash
npm i react-recipes --save
```

```bash
yarn add react-recipes
```

## Recipes

| Name                                     | Returns                        |
| ---------------------------------------- | ------------------------------ |
| [`useCopyClipboard`](#usecopyclipboardf) | [isCopied, setIsCopied]        |
| [`useDarkMode`](#useDarkModef)           | [enabled, setEnabledState]     |
| [`useDebounce`](#useDebouncef)           | [debouncedValue]               |
| [`useDimensions`](#useDimensionsf)       | [ref, dimensions, node]        |
| [`useEventListener`](#useEventListenerf) | -                              |
| [`useHover`](#useHoverf)                 | [callbackRef, value]           |
| [`useInterval`](#useIntervalf)           | [delay, ...effectDependencies] |
| [`useKeyPress`](#useKeyPressf)           | [keyPressed]                   |
|                                          |

## Documentation

### `useCopyClipboard(f)`

Copies any string to the clipboard

#### Arguments

- `duration?: Number`: Duration of "on/success" state, default is `2000`.

#### Returns

- `isCopied: Bool`: true when string was copied for the length of the duration.
- `setIsCopied: Function`: Copies the string to the clipboard

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

### `useDarkMode(f)`

Toggles (and saves to localStorage) dark mode

#### Returns

- `darkMode: Bool`: true when dark.
- `setDarkMode: Function`: Toggles darkMode

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

### `useDebounce(f)`

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

### `useDimensions(f)`

Gives the dimensions of any element

#### Arguments

- `liveMeasure?: Bool`: Adds scroll and resize events to always have the latest dimensions, default is `true`.
- `delay?: Number`: delay for debounce calculation, default is `250`.

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


### `useEventListener(f)`

Adds an event listener

#### Arguments

- `eventName: String`: Name of event. Required.
- `handler: Function`: Callback function. Required.
- `element?: Element`: Element to attach the eventListener, default is `window`.

```js
import { useEventListener } from "react-recipes";

function App(){
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
  useEventListener('mousemove', handler);

  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}
```


### `useHover(f)`

Know when the mouse if hovering over an element

#### Returns

- `hoverRef: Ref`: add this to the desired hover element
- `isHovered: Bool`: Whether or not the mouse is currently hovering over element

```js
import { useHover } from "react-recipes";

function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      {isHovered ? '😁' : '☹️'}
    </div>
  );
}
```

### `useInterval(f)`

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

### `useKeyPress(f)`

Gives the dimensions of any element

#### Arguments

- `targetKey: string`: A key on the keyboard. Required

#### Returns

- `keyPressed: Bool`: true on keydown are the targetKey.

```js
import { useKeyPress } from "react-recipes";

function App() {
  const [keyPressed] = useKeyPress('h');

  return (
    <div>
      "h" key pressed: {keyPressed}
    </div>
  );
}