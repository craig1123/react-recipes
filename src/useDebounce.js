import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

export default useDebounce;

// Usage

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   // Debounce search term so that it only gives us latest value ...
//   // ... if searchTerm has not been updated within last 500ms.
//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   // Effect for API call
//   useEffect(
//     () => {
//       if (debouncedSearchTerm) {
//         setIsSearching(true);
//         searchCharacters(debouncedSearchTerm).then(results => {
//           setIsSearching(false);
//           setResults(results);
//         });
//       } else {
//         setResults([]);
//       }
//     },
//     [debouncedSearchTerm]
//   );

//   ...
// };
