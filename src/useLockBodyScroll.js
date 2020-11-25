import { useLayoutEffect } from 'react';

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

export default useLockBodyScroll;

// Usage

// function Modal({ title, content, onClose }){
//   // Call hook to lock body scroll
//   useLockBodyScroll();

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal">
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }
