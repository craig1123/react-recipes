# 🍐 `useIsClient`

Check if the javascript is loaded from the web client

## Returns

- `isClient: Bool`: true when window is available. False when server side rendered

## Usage

```js
import { useIsClient } from "react-recipes";

const App = () => {
  const isClient = useIsClient();

  return <div>{isClient && "client side rendered"}</div>;
};
```