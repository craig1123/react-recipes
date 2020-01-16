# 🍉 `useMedia`

Media Queries for Javascript

## Arguments

- `queries: Array`: List of Media Query strings
- `values: Array`: List of values that correlates to the query list
- `defaultValue: Any`: default value of media query

## Returns

- `value: Any`:

## Usage

```js
import { useMedia } from "react-recipes";

function App() {
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );
  const columnCount = useMedia(
    // Media queries
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );

  let columnHeights = new Array(columnCount).fill(0);
  let columns = new Array(columnCount).fill().map(() => []);

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