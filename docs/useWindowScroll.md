# 🥖 `useWindowScroll`

Re-renders on window scroll.

## Returns
- `state: Object`
  - `x: Number`: Horizontal location
  - `y: Number`: Vertical location

## Usage

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