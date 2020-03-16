# 🔔`useNotification`

Uses the Notification Browser API in hook form

## Arguments

- `title: string`: The title of the notification
- `options?: object`: A list of options are here https://developer.mozilla.org/en-US/docs/Web/API/notification

## Returns

- `fireNotify: Function()`: Asks the user to allow notifications

## Usage

```js
import { useNotification } from 'react-recipes';

const App = () => {
  const triggerNotif = useNotification('hello world', {
    dir: 'rtl',
    body: 'Nice!',
  });

  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
```
