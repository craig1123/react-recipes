import { useEffect } from 'react';

const useSetElementAttribute = (elemQuery, attributes) => {
  useEffect(() => {
    const domElement = document.querySelector(elemQuery);
    if (!domElement) {
      return;
    }

    attributes.forEach(({ key, value }) => {
      if (domElement.getAttribute(key) !== value) {
        domElement.setAttribute(key, value);
      }
    });
  }, [elemQuery, attributes]);
};

// Usage
// const App = () => {
//   const [locale] = useLocal();
//   const priceData = fetchPriceData();

//   useSetElementAttribute('html', [{ key: 'lang', value: locale }, { key: 'dir', value: 'rtl' }])
//   useSetElementAttribute('#bookingPrice', [{ key: 'data-price', value: JSON.stringify(priceData) }, { key: 'aria-label', value: 'price-data' }])

//   return ...
// }

export default useSetElementAttribute;
