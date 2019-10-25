// _inspired by_ https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

function useInterval(callback, delay, runOnLoad, effectDependencies = []) {
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
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    
    return () => null;
  }, [delay, ...effectDependencies]);
};


export default useInterval;