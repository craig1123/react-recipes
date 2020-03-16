import { useCallback } from 'react';

const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }

  const fireNotify = useCallback(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }, []);

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
