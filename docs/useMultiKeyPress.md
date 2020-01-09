# 🥭 `useMultiKeyPress`

Listens for mulitple keypresses at a time

## Returns

- `keysPressed: Set`: A set a keys currently pressed

## Usage

```js
import { useMultiKeyPress } from "react-recipes";

function App() {
  const keysPressed = useMultiKeyPress();

  return <div>{[...keysPressed].map(key => `${key} key pressed`)}</div>;
}
```