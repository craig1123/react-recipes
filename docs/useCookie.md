# 🍪 `useCookie`

Create, read, or delete cookies (mmmm...cookie)

## Arguments

- `cookieName: String`: Name of cookie
- `initialValue?: String`: First value of cookie

## Returns

- `cookieValue: String`: Current value of the cookie
- `updateCookie: Function(value: String, days = 365, path = '/')`: Set a new value of the cookie
- `deleteCookie: Function(path = '/')`: Bye bye cookie

## Usage

```jsx
import { useCookie } from "react-recipes";

const App = () => {
  const [userToken, setUserToken, deleteUserToken] = useCookie('token', '0');

  render(
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken('123')}>Change token</button>
      <button onClick={() => deleteUserToken()}>Delete token</button>
    </div>
  );
};
```
