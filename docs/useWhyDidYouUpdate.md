# 🍷 `useWhyDidYouUpdate`

Console logs the reason for why a component updated

## Arguments

- `name: String`: Name this log
- `props: Object`: Component props from parent

## Usage

```js
import { useWhyDidYouUpdate } from "react-recipes";

// Let's pretend this <Counter> component is expensive to re-render so ...
// ... we wrap with React.memo, but we're still seeing performance issues :/
// So we add useWhyDidYouUpdate and check our console to see what's going on.
const Counter = React.memo(props => {
  useWhyDidYouUpdate('Counter', props);
  return <div style={props.style}>{props.count}</div>;
});
```