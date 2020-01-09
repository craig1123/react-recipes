# 🍩 `useDarkMode`

Toggles (and saves to localStorage) dark mode

## Returns

- `darkMode: Bool`: true when dark.
- `setDarkMode: Function()`: Toggles darkMode

## Usage

```js
import { useDarkMode } from "react-recipes";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
}
```