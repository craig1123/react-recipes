import { useState, useEffect } from 'react';

function getCurrentLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
  };
}

const listeners = [];

function useLocation() {
  const [{ pathname, search }, setLocation] = useState(getCurrentLocation());

  /** All components using the 'useLocation' hook will update. */
  function notify() {
    listeners.forEach(listener => listener());
  }

  function handleChange() {
    setLocation(getCurrentLocation());
  }

  useEffect(() => {
    listeners.push(handleChange);
    window.addEventListener('popstate', handleChange);
    return () => {
      listeners.splice(listeners.indexOf(handleChange), 1);
      window.removeEventListener('popstate', handleChange);
    };
  }, []);

  function push(url) {
    window.history.pushState(null, null, url);
    notify();
  }

  function replace(url) {
    window.history.replaceState(null, null, url);
    notify();
  }

  return {
    push,
    replace,
    pathname,
    search,
  };
}

export default useLocation;

// Usage

// function App() {
//   const { push, replace, pathname, search } = useLocation()

//   return (
//     <div>
//       <div>
//         // Push the user to /example route
//         <button onClick={() => push('/example')}>Push to /example</button>
//       </div>
//       <div>
//         // Replace currento route for /example route
//         <button onClick={() => replace('/example?search=example2')}>
//           Replace to /example?search=example2
//         </button>
//       </div>
//        // Get current pathname
//       <h3>Pathname: {pathname}</h3>
//        // Get current search params
//       <h3>Search: {search}</h3>
//     </div>
//   )
// }
