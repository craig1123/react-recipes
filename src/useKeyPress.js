import { useState } from 'react';
import useEventListener from './useEventListener';

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEventListener('keydown', downHandler);
  useEventListener('keyup', upHandler);

  return keyPressed;
}

export default useKeyPress;

// Usage

// function App() {
//   const happyPress = useKeyPress("h");

//   return <div>{happyPress && "😊"}</div>;
// }
