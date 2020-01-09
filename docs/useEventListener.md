# 🍳 `useEventListener`

Adds an event listener

## Arguments

- `eventName: String`: Name of event. Required.
- `handler: Function`: Callback function. Required.
- `element?: Element`: Element to attach the eventListener, default is `window`.

## Usage

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