import { useState } from 'react';

const setCookie = (name, value, days, path) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
};

const getCookie = (name) => document.cookie.split('; ').reduce((r, v) => {
  const parts = v.split('=');
  return parts[0] === name ? decodeURIComponent(parts[1]) : r;
}, '');

const useCookie = (cookieName, initialValue) => {
  const [cookieValue, setCookieValue] = useState(() => getCookie(cookieName) || initialValue);

  const updateCookie = (value, days = 365, path = '/') => {
    setCookieValue(value);
    setCookie(cookieName, value, days, path);
  };

  const deleteCookie = (path = '/') => {
    updateCookie('', -1, path);
    setCookieValue(null);
  };

  return [cookieValue, updateCookie, deleteCookie];
};

export default useCookie;

// Usage

// const App = () => {
//   const [userToken, setUserToken, deleteUserToken] = useCookie('token', '0');

//   render(
//     <div>
//       <p>{userToken}</p>
//       <button onClick={() => setUserToken('123')}>Change token</button>
//       <button onClick={() => deleteUserToken()}>Delete token</button>
//     </div>
//   );
// };
