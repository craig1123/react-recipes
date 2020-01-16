# 🥮 `useWindowSize`

Gets the window size and listens for resizes

## Arguments

- `initialWidth: Number`: initial width used as a fallback for SSR
- `initialHeight: Number`: initial height used as a fallback for SSR

## Returns

- `state: Object`
  - `width: Number`: width of the window's viewport
  - `height: Number`: height of the window's viewport

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