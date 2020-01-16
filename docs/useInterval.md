# 🍦 `useInterval`

Makes `setInterval` way easier

## Arguments

- `callback: Function`: Callback after each interval
- `delay: Number`: delay time between each callback invocation
- `runOnLoad?: Bool`: Whether or not to run interval on mount, default is false.
- `effectDependencies?: Array`: List of effects to re-call callback, default is `[]`.

## Usage

```js
import { useInterval } from "react-recipes";

const App = () => {
  // Grabs user data every 7500ms or when user changes
  useInterval(() => {
    if (user) {
      getUserInfo(user);
    }
  }, 7500, true, [user]);

  ...
};
```
