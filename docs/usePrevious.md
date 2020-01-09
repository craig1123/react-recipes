# 🍿 `usePrevious`

Returns the previously set value

## Arguments

- `value: Any`: The current value (next value to save)

## Returns

- `previous: Any`: The previous value

## Usage

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