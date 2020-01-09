# 🥝 `useWorker`

Easy function to set up workers

## Arguments

- `scriptPath: String`: Path to the script file that a new Worker is to be created with
- `workerOptions: Object`: `onMessage` and `onMessageError` options can be passed to communicate with the worker
- `attributes: Object`: Event handlers to attach to the worker

## Returns

- `worker: Worker`: The worker instance

## Usage

```js
import { useWorker } from "react-recipes";

function App() {
  const [value, setValue] = useState(0);
  useWorker('/worker.js', {
    onMessage: (e) => {
      console.log('message received from worker');
      console.log(e.data);
      setValue(e.data);
    },
    onMessageError: (e) => {
      console.log(e);
    },
  });

  return value;
}
```