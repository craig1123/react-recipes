import { useState, useCallback, useLayoutEffect } from 'react';
import debounce from './utils/debounce';

function useDimensions({ liveMeasure: liveMeasure = true, timer: timer = 250 }) {
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
      }, timer);
      measure();

      if (liveMeasure) {
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure);

        return () => {
          window.removeEventListener('resize', measure);
          window.removeEventListener('scroll', measure);
        };
      }
    }
  }, [node, liveMeasure]);

  return [ref, dimensions, node];
}

export default useDimensions;


// Usage

// function App() {
//   const [wrapperRef, dimensions] = useDimension();

//   return (
//     <div ref={wrapperRef}>
//       height: {dimensions.height}
//       width: {dimensions.width}
//     </div>
//   );
// }