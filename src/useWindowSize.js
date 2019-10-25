import { useState, useEffect } from 'react';
import isClient from "../utils/isClient";

function useWindowSize(initialWidth, initialHeight) {
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight
  });

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }
    
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;

// Usage
// function App() {
//   const size = useWindowSize();

//   return (
//     <div>
//       {size.width}px / {size.height}px
//     </div>
//   );
// }