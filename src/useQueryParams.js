import { useEffect } from 'react';
import useLocation from './useLocation';

// getParams & setParams

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
    console.log(params);
    const urlSearchParams = new URLSearchParams(params);
    replace(`?${urlSearchParams.toString()}`);

    console.log(urlSearchParams.toString());
    // urlSearchParams.forEach((item) => console.log(item));
    // const urlSearchParams = new URLSearchParams();
    // Object.entries(params).forEach(([key, value]) => {
    //   console.log(key, value);
    //   urlSearchParams.append(key, value);
    // });
    // replace(`?${urlSearchParams.toString()}`);
  };

  useEffect(() => {
    getParams();
  }, [search]);

  return {
    getParams, setParams,
  };
}
