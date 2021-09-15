# 🖨 `usePrint`

Preview and Print any block of html

## Arguments

- `style: Object`: style to be passed to the preview

## Returns

```
{
  ref: Ref: Click outside of this element,
  handlePrint: Function - will start the print preview process
}
```

## Usage

```jsx
import { usePrint } from 'react-recipes';

const App = () => {
  const { ref, handlePrint } = usePrint();

  return (
    <div ref={ref}>
      Hello World
      <button onClick={handlePrint} type="button">
        Print This Block
      </button>
    </div>
  );
};
```
