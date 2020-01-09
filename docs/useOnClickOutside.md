# 🥑 `useOnClickOutside`

Event listener for clicking outside of an element

## Arguments

- `ref: Ref`: Click outside of this element
- `callback: Function`: Called on click outside

## Usage

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