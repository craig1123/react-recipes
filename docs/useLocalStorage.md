# 🍱 `useLocalStorage`

Store and set values into localStorage

## Arguments

- `key: String`: A unique key to be stored in localStorage
- `initialValue: String`: Value to be used the first time for localStorage

## Returns

- `storedValue: String`: Value in localStorage
- `setValue: Function`: Set a new value to localStorage

## Usage

```js
import { useLocalStorage } from "react-recipes";

function App() {
  // Similar to useState but first arg is key to the value in local storage.
  const [name, setName] = useLocalStorage("name", "Bob");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}
```