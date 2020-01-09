# 🍜 `useDebounce`

Debounce any fast changing value

## Arguments

- `value: Any`: value to be debounced
- `delay: Number`: Delay of debounce

## Returns

- `debouncedValue: Any`: Equal to the value passed in

## Usage

```js
import { useDebounce } from "react-recipes";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then(results => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  ...
};
```