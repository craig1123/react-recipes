import { useState, useCallback, useLayoutEffect } from "react";
import debounce from "../utils/debounce"; // maybe use a hook instead?

function useDimensions(liveMeasure = true, delay = 250) {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback(newNode => {
    setNode(newNode);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = debounce(() => {
        window.requestAnimationFrame(() => {
          const newDimensions = node.getBoundingClientRect();
          setDimensions(newDimensions);
        });
      }, delay);
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);

        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node, liveMeasure]);

  return [ref, dimensions, node];
}

export default useDimensions;

// Usage

// function App() {
//   const [wrapperRef, dimensions] = useDimensions();

//   return (
//     <div ref={wrapperRef}>
//       height: {dimensions.height}
//       width: {dimensions.width}
//     </div>
//   );
// }
