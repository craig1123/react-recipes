# 👁 `useIntersectionObserver`

A React hook to detect when an element becomes visible in the viewport using the Intersection Observer API.

## Arguments

- `options: Object`: Configuration options for the `IntersectionObserver` such as:
    - `root: Element`: The element that is used as the viewport for checking visibility of the target (default is `null` for the browser viewport).
    - `rootMargin: String`: Margin around the root element (e.g., `'0px'`, `'10px'`).
    - `threshold: Number | Array`: A single number or array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed (e.g., `1.0` means the callback is invoked when 100% of the element is visible)

## Returns

- `[{ containerRef, isContentVisible }]`
    - `containerRef: RefObject`: Ref to be attached to the DOM element you want to observe.
    - `isContentVisible: Boolean`: Boolean flag indicating whether the element is currently visible in the viewport.
## Usage

```js
import useIntersectionObserver from "react-recipes";

function App() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const [{ containerRef, isContentVisible }] = useIntersectionObserver({ options });

  return (
    <div ref={containerRef}>
      {isContentVisible ? <div>Load Only When it's visible in viewport Text</div> : null}
    </div>
  );
}

```