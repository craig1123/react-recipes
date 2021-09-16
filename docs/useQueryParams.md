# 📍 `useQueryParams`

Gets and sets query params

## Usage

```js
import { useQueryParams } from 'react-recipes';

function App() {
  const { getParams, setParams } = useQueryParams();

  const params = getParams();

  return (
    <div>
      <button
        onClick={() => {
          setParams({ page: 1, order: 'ASC' });
        }}
      >
        Set Params
      </button>
      <button
        onClick={() => {
          setParams({});
        }}
      >
        Clear params
      </button>
      {Object.entries(params).map(([paramKey, paramValue]) => (
        <p>
          {paramKey}: {paramValue}
        </p>
      ))}
    </div>
  );
}
```
