import useLocation from './useLocation';

export default function useQueryParams() {
  const {
    replace, search,
  } = useLocation();

  const getParams = () => {
    const urlSearchParams = new URLSearchParams(search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
  };

  const setParams = (params) => {
    const stringfiedUrlSearchParams = new URLSearchParams(params).toString();
    replace(`?${stringfiedUrlSearchParams}`);
  };

  return {
    getParams, setParams,
  };
}

// Usage

// function App() {
//   const { getParams, setParams } = useQueryParams();
//   const params = getParams();
//
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setParams({ page: 1, order: 'ASC' });
//         }}
//       >
//         Set Params
//       </button>
//       <button
//         onClick={() => {
//           setParams({});
//         }}
//       >
//         Clear params
//       </button>
//       {Object.entries(params).map(([paramKey, paramValue]) => (
//         <p>
//           {paramKey}: {paramValue}
//         </p>
//       ))}
//     </div>
//   );
// }
