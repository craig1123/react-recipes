# 🥮 `useWindowSize`

Gets the window size and listens for resizes

## Arguments

- `src: String`: The source url to the script

## Returns

- `loaded: Bool`: Did the script load?
- `error: Bool`: Did the script error out?

## Usage

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