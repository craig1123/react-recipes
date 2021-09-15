# 📍 `useLocation`

Read and manipulate window.location

## Usage

```js
import { useLocation } from 'react-recipes';

function App() {
  const { push, replace, pathname, search } = useLocation();

  return (
    <div>
      <div>
        <button onClick={() => push('/example')}>Push to /example</button>
      </div>
      <div>
        <button onClick={() => replace('/example?search=example2')}>Replace to /example?searchexample2</button>
      </div>
      <h3>Pathname: {pathname}</h3>
      <h3>Search: {search}</h3>
    </div>
  );
}
```
