import { useState } from 'react';
import useEventListener from './useEventListener';

function getOnlineStatus() {
  return typeof navigator !== 'undefined'
    && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;
}

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());

  useEventListener('online', () => setOnlineStatus(true));
  useEventListener('offline', () => setOnlineStatus(false));

  return onlineStatus;
}

export default useOnlineStatus;

// Usage

// function App() {
//   const onlineStatus = useOnlineStatus();
//
//   return (
//     <div>
//       <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
//     </div>
//   );
// }
