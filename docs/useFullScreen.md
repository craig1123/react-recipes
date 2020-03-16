# 🌮 `useFullScreen`

Determines and toggles if the screen/element is in full-screen mode

## Arguments

- `element?: Node`: A DOM element from a React ref

## Returns

- `fullScreen: Boolean`: if the document/element is full-screen
- `open: Function`: opens full screen mode
- `close: Function`: closes full screen mode
- `toggle: Function`: toggles full screen mode

## Usage

```js
import { useFullScreen } from 'react-recipes';

const App = () => {
  const { toggle } = useFullScreen();

  return <button onClick={toggle}>Toggle Full Screen</button>;
};
```
