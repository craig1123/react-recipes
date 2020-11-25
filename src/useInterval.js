// _inspired by_ https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

function useInterval(callback, delay, runOnLoad = false, effectDependencies = []) {
  const savedCallback = useRef();

  useEffect(() => {
    if (runOnLoad) {
      callback();
    }
  }, [...effectDependencies]);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay, ...effectDependencies]);
}

export default useInterval;

// Usage

// const App = () => {
//   // Grabs user data every 7500ms or when user changes
//   useInterval(() => {
//     if (user) {
//       getUserInfo(user);
//     }
//   }, 7500, true, [user]);

//   ...
// };
