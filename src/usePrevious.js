import { useEffect, useRef } from 'react';

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default usePrevious;

// Usage

// function App() {
//   // State value and setter for our example
//   const [count, setCount] = useState(0);

//   // Get the previous value (was passed into hook on last render)
//   const prevCount = usePrevious(count);

//   // Display both current and previous count value
//   return (
//     <div>
//       <h1>Now: {count}, before: {prevCount}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//    );
// }
