# 🧈 `useSetElementAttribute`

Sets an attribute on a DOM element

## Arguments

- `elemQuery: string`: name of element to query. Ex - 'html', '.class', '#name', etc
- `attributes: Array`: array of objects of attributes to update
  {
    `key: string`: name of element attribute to update
    `value: string`: value of element attribute
  }
## Usage

```jsx
import { useSetElementAttribute } from 'react-recipes';

const App = () => {
  const [locale] = useLocal();
  const priceData = fetchPriceData();

  useSetElementAttribute('html', [{ key: 'lang', value: locale }, { key: 'dir', value: 'rtl' }])
  useSetElementAttribute('#bookingPrice', [{ key: 'data-price', value: JSON.stringify(priceData) }, { key: 'aria-label', value: 'price-data' }])

  return null
}
```
