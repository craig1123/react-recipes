# 🥠 `useCopyClipboard`

Copies any string to the clipboard

## Arguments

- `duration?: Number`: Duration of "on/success" state, default is `2000`.

## Returns

- `isCopied: Bool`: true when string was copied for the length of the duration.
- `setIsCopied: Function(string)`: Copies the string to the clipboard

## Usage

```js
import { useCopyClipboard } from "react-recipes";

const App = () => {
  const [isCopied, setIsCopied] = useCopyClipboard();

  const copy = () => {
    setIsCopied("This string is copied");
  };

  return (
    <button onClick={copy} type="button">
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
};
```