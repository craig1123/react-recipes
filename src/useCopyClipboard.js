/* eslint-disable consistent-return */
import { useState, useEffect } from "react";

function copyToClipboard() {
  const el = document.createElement("textarea");
  const iOS = window.navigator.userAgent.match(/ipad|iphone/i);
  el.contentEditable = true; // needed for iOS >= 10
  el.readOnly = false; // needed for iOS >= 10
  el.value = str;
  el.style.border = '0';
  el.style.padding = '0';
  el.style.margin = '0';
  el.style.position = 'absolute';
  // sets vertical scroll
  const yPosition = window.pageYOffset || document.documentElement.scrollTop;
  el.style.top = `${yPosition}px`;

  document.body.appendChild(el);

  if (iOS) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
  } else {
    el.select();
  }

  const successful = document.execCommand("copy");
  document.body.removeChild(el);

  return successful;
}

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
    text => {
      const didCopy = copyToClipboard(text);
      setIsCopied(didCopy);
    }
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
