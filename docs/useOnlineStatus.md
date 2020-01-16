# 🥒 `useOnlineStatus`

Subscribe to online/offline events and the navigator.onLine property to see current status

## Returns

- `onlineStatus: Bool`: current online status

## Usage

```js
import { useOnlineStatus } from "react-recipes";

function App() {
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}
```