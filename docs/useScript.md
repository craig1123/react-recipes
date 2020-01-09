# 🍣 `useScript`

Creates a script tag and loads the script

## Arguments

- `src: String`: The source url to the script

## Returns

- `loaded: Bool`: Did the script load?
- `error: Bool`: Did the script error out?

## Usage

```js
import { useScript } from "react-recipes";

function App() {
  const [loaded, error] = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  );

  return (
    <div>
      <div>
        Script loaded: <b>{loaded.toString()}</b>
      </div>
      {loaded && !error && (
        <div>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  );
}
```