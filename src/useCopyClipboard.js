/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import copyToClipboard from '../utils/copyToClipboard';

function useCopyClipboard(successDuration = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => clearTimeout(id);
    }
  }, [isCopied, successDuration]);

  return [
    isCopied,
    (text) => {
      const didCopy = copyToClipboard(text);
      setIsCopied(didCopy);
    },
  ];
}

export default useCopyClipboard;

//               |    |    |
//              )_)  )_)  )_)
//             )___))___))___)\
//            )____)____)_____)\\
//          _____|____|____|____\\\__
// ---------\                   /---------
// ^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//   ^^^^      ^^^^     ^^^     ^^^^
//       ^^^^      ^^^      ^^^

// You can't cross the sea by merely standing
// and staring at the water

// Usage

// const App = () => {
//   const [isCopied, setIsCopied] = useCopyClipboard();

//   const copy = () => {
//     setIsCopied(supportEmail);
//   };

//   return (
//     <button onClick={copy} type="button">
//       {isCopied ? 'Copied' : 'Copy'}
//     </button>
//   );
// };
