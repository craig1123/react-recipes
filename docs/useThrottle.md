# 🍏 `useThrottle`

Throttles a value

## Arguments

- `value: Any`: The value to be throttled
- `ms: Number`: The time in milliseconds to throttle

## Returns

- `throttledValue: Any`: The returned value after the throttling

## Usage

```js
import { useThrottle } from "react-recipes";

const App = ({ value }) => {
  const throttledValue = useThrottle(value, 250);

  return (
    <>
      <div>Value: {value}</div>
      <div>Throttled value: {throttledValue}</div>
    </>
  );
};
```