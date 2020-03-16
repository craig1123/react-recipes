# 🥟 `useArray`

Manipulate and read an Array

## Arguments

- `initialValue: Array`: init of array

## Returns

```
{
  add,
  clear,
  removeIndex,
  removeById,
  value,
  setValue
}
```

## Usage

```jsx
import { useArray } from 'react-recipes';

function App {
  const {
    add,
    clear,
    removeIndex,
    removeById,
    value: currentArray
  } = useArray(['cat','dog','bird']);

  return (
    <>
      <button onClick={() => add('tiger')}>Add animal</button>
      <button onClick={() => removeIndex(2)}>Remove Bird</button>
      <button onClick={clear}>Clear</button>
    </>
  )
};
```
