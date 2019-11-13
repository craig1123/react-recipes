import { useState, useCallback, useLayoutEffect } from "react";
import debounce from "../utils/debounce"; // maybe use a hook instead?

function useDimensions(liveMeasure = true, delay = 250, effectDeps = []) {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback(newNode => {
    setNode(newNode);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          const newDimensions = node.getBoundingClientRect();
          setDimensions(newDimensions);
        });
      }
      const debounceMeasure = debounce(measure, delay);
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", debounceMeasure);
        window.addEventListener("scroll", debounceMeasure);

        return () => {
          window.removeEventListener("resize", debounceMeasure);
          window.removeEventListener("scroll", debounceMeasure);
        };
      }
    }
  }, [node, liveMeasure, ...effectDeps]);

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
