/* eslint-disable guard-for-in */
import { useState, useEffect } from 'react';

/**
 * useWorker hook
 *
 * @param {string} scriptPath - Path of the worker
 * @param {object} workerOptions - Additional options to create the worker
 * @param {object} attributes - Event handlers to attach to the worker
 * @return {Worker}
 */
function useWorker(
  scriptPath,
  workerOptions,
  attributes,
) {
  const [worker, setWorker] = useState(undefined);

  useEffect(() => {
    const newWorker = new Worker(scriptPath, workerOptions);
    // attach attributes
    if (attributes) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in attributes) {
        newWorker[key] = attributes[key];
      }
    }

    setWorker(newWorker);

    return () => {
      newWorker.terminate();
      setWorker(undefined);
    };
  }, [scriptPath]);

  return worker;
}

export default useWorker;

// usage

// function App() {
//   const [value, setValue] = useState(0);
//   useWorker('/worker.js', {
//     onMessage: (e) => {
//       console.log('message received from worker');
//       console.log(e.data);
//       setValue(e.data);
//     },
//     onMessageError: (e) => {
//       console.log(e);
//     },
//   });

//   return value;
// }
