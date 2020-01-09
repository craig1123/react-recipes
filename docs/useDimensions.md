# 🥡 `useDimensions`

Gives the dimensions of any element

## Arguments

- `liveMeasure?: Bool`: Adds scroll and resize events to always have the latest dimensions, default is `true`.
- `delay?: Number`: delay for debounce calculation, default is `250`.
- `initialDimensions?: Object`: Default dimensions before the calculation. Default is `{}`.
- `effectDependencies?: Array`: List of effects to re-call useLayoutEffect, default is `[]`.

## Returns

- `ref: Ref`: Give this ref to the element needing the calculation
- `dimensions: Object`: All of the element's dimensions
- `node: Node`: The Element

## Usage

```js
import { useDimensions } from "react-recipes";

function App() {
  const [wrapperRef, dimensions] = useDimensions();

  return (
    <div ref={wrapperRef}>
      height: {dimensions.height}
      width: {dimensions.width}
    </div>
  );
}
```