# 🔄 `useAsync`

Rather then litter your components with a bunch of useState calls to keep track of the state of an asynchronous function, you can use this custom hook which takes an async function as an input and returns the `error`, `pending`, and `value` values you need to properly update your user interface. This hook allows for both immediate execution and delayed execution using the returned `execute` function.

## Arguments

- `asyncFunction: Function()`: Function to make async
- `immediate?: Bool`: Allows for immediate execution, default is true


## Returns

- `error: String`: Error from catch method when executing and setting value
- `execute: Function()`: Allows for delayed execution of your function
- `pending: Bool`: True when executing, false otherwise
- `value: Any`: Value returned from execution of your function


## Usage

```jsx
import { useAsync } from "react-recipes";

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞');
    }, 2000);
  });
};

function App() {
  const {
    error,
    execute,
    pending,
    value,
  } = useAsync(myFunction, false);

  return (
    <div>
      {value && <div>{value}</div>}
      {error && <div>{error}</div>}
      <button onClick={execute} disabled={pending}>
        {pending ? 'Loading...' : 'Click Me'}
      </button>
    </div>
  );
}
```
