import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, immediate = true) => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // useCallback ensures useEffect is not called on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setError(null);
    setPending(true);
    setValue(null);

    return asyncFunction()
      .then((response) => setValue(response))
      .catch((err) => setError(err))
      .finally(() => setPending(false));
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    error, execute, pending, value,
  };
};

export default useAsync;

// Usage

// const myFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rnd = Math.random() * 10;
//       rnd <= 5
//         ? resolve('Submitted successfully 🙌')
//         : reject('Oh no there was an error 😞');
//     }, 2000);
//   });
// };

// function App() {
//   const {
//     execute, pending, value, error,
//   } = useAsync(myFunction, false);

//   return (
//     <div>
//       {value && <div>{value}</div>}
//       {error && <div>{error}</div>}
//       <button onClick={execute} disabled={pending}>
//         {pending ? 'Loading...' : 'Click Me'}
//       </button>
//     </div>
//   );
// }
