# 🌭 `useHover`

Know when the mouse if hovering over an element

## Returns

- `hoverRef: Ref`: add this to the desired hover element
- `isHovered: Bool`: Whether or not the mouse is currently hovering over element

## Usage

```js
import { useHover } from "react-recipes";

function App() {
  const [hoverRef, isHovered] = useHover();

  return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}
```