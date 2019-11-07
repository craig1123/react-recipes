<p align="center" style="color: #343a40">
  <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman-cook.png" alt="react-recipes-logo" height="150" width="150">
  <h1 align="center">React Recipes</h1>
</p>
<p align="center" style="font-size: 1.2rem;">A React Hooks utility library containing popular customized hooks</p>
<p align="center" style="font-size: 1.2rem;">What's your favorite dish?</p>

```bash
npm i react-recipes --save
```

```bash
yarn add react-recipes
```

## Recipes

| Name                                     | Returns                 |
| ---------------------------------------- | ----------------------- |
| [`useCopyClipboard`](#usecopyclipboardf) | [isCopied, setIsCopied] |
|                                          |

## Documentation

### `useCopyClipboard(f)`

Copies any string to the clipboard

#### Arguments

- `initial?: Number`: Duration of "on/success" state, default is `2000`.

#### Returns

- `isCopied: Boolean`: true when string was copied for the length of the duration.
- `setIsCopied: Function`: Copies the string to the clipboard

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
