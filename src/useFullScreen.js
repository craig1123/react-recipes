import { useState, useEffect } from 'react';
import isClient from '../utils/isClient';

/**
 * determine if we are in fullscreen mode
 * @param {object} el
 */
export function isFullScreenElement(el) {
  if (el && el.current) {
    return Boolean(
      document.fullscreenElement === el.current ||
        document.mozFullScreenElement === el.current ||
        document.webkitFullscreenElement === el.current ||
        document.msFullscreenElement === el.current,
    );
  }

  return Boolean(
    document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.fullScreenMode,
  );
}

function useFullScreen(element) {
  const initialState = !isClient ? false : isFullScreenElement(element);
  const [fullScreen, setFullScreen] = useState(initialState);

  // access various open fullscreen methods
  function openFullScreen() {
    const el = (element && element.current) || document.documentElement;

    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  }

  // access various exit fullscreen methods
  function closeFullScreen() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  }

  useEffect(() => {
    function handleChange() {
      setFullScreen(isFullScreenElement(element));
    }

    document.addEventListener('webkitfullscreenchange', handleChange, false);
    document.addEventListener('mozfullscreenchange', handleChange, false);
    document.addEventListener('msfullscreenchange', handleChange, false);
    document.addEventListener('MSFullscreenChange', handleChange, false); // IE11
    document.addEventListener('fullscreenchange', handleChange, false);

    return () => {
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('msfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, [element]);

  return {
    fullScreen,
    open: openFullScreen,
    close: closeFullScreen,
    toggle: fullScreen ? closeFullScreen : openFullScreen,
  };
}

export default useFullScreen;

// Usage

// const App = () => {
//   const { toggle } = useFullScreen()

//   return (
//     <button onClick={toggle}>Toggle Full Screen</button>
//   );
// };
