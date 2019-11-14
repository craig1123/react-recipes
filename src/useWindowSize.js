import { useState } from 'react';
import isClient from '../utils/isClient';
import useEventListener from './useEventListener';

function useWindowSize(initialWidth, initialHeight) {
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  useEventListener('resize', () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

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
