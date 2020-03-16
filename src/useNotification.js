import { useCallback } from 'react';

const useNotification = (title, options) => {
  const fireNotify = useCallback(() => {
    if (!('Notification' in window)) {
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          Notification(title, options);
        }
      });
    } else {
      Notification(title, options);
    }
  }, []);

  if (!('Notification' in window)) {
    return;
  }

  return fireNotify;
};

export default useNotification;

// Usage

// const App = () => {
//   const triggerNotif = useNotification("hello world", {
//     dir: "rtl",
//     body: "Nice!",
//   });

//   return (
//     <div className="App">
//       <button onClick={triggerNotif}>Hello</button>
//     </div>
//   );
// };
