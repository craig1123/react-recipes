import { useEffect, useRef } from 'react';

const styleToString = (style) => {
  return Object.entries(style)
    .map(([a, b]) => {
      return [
        a
          .split(/(?=[A-Z])/)
          .join('-')
          .toLowerCase(),
        b,
      ].join(':');
    })
    .join(';');
};

const defaultStyle = {
  position: 'absolute',
  zIndex: 999999,
  backgroundColor: 'white',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const usePrint = (style = {}) => {
  const ref = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    let div;
    const divStyle = styleToString({ ...defaultStyle, ...style });

    const onbeforeprint = () => {
      console.log('hi');
      div = document.createElement('div');
      div.style = divStyle;
      const prevRef = ref.current.cloneNode(true);
      div.appendChild(prevRef);
      document.body.appendChild(div);
    };

    const onafterprint = () => {
      div.parentNode.removeChild(div);
    };

    window.addEventListener('beforeprint', onbeforeprint);
    window.addEventListener('afterprint', onafterprint);

    return () => {
      window.removeEventListener('beforeprint', onbeforeprint);
      window.removeEventListener('afterprint', onafterprint);
    };
  }, [ref, style]);

  return { ref, handlePrint };
};

export default usePrint;

// Usage

// const App = () => {
//   const { ref, handlePrint } = usePrint();

//   return (
//     <div ref={ref}>
//       Hello World
//       <button onClick={handlePrint}>Print This Block</button>
//     </div>
//   );
// };
