# 🍋 `useLockBodyScroll`

Locks the scrolling - used for things like modals

## Usage

```js
import { useLockBodyScroll } from "react-recipes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen && (
      <Modal title="The title" onClose={() => setIsOpen(false)}>
        Great modal content!
      </Modal>
    )
  );
}

function Modal({ title, children, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}
```