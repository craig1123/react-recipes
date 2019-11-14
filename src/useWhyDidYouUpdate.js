import { useEffect, useRef } from 'react';

function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach((key) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}

export default useWhyDidYouUpdate;

// USAGE

// Let's pretend this <Counter> component is expensive to re-render so ...
// ... we wrap with React.memo, but we're still seeing performance issues :/
// So we add useWhyDidYouUpdate and check our console to see what's going on.
// const Counter = React.memo(props => {
//   useWhyDidYouUpdate('Counter', props);
//   return <div style={props.style}>{props.count}</div>;
// });

// function App() {
//   const [count, setCount] = useState(0);
//   const [userId, setUserId] = useState(0);

//   // Our console output tells use that the style prop for <Counter> ...
//   // ... changes on every render, even when we only change userId state by ...
//   // ... clicking the "switch user" button. Oh of course! That's because the
//   // ... counterStyle object is being re-created on every render.
//   // Thanks to our hook we figured this out and realized we should probably ...
//   // ... move this object outside of the component body.
//   const counterStyle = {
//     fontSize: '3rem',
//     color: 'red'
//   };

//   return (
//     <div>
//       <div className="counter">
//         <Counter count={count} style={counterStyle} />
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//       <div className="user">
//         <img src={`http://i.pravatar.cc/80?img=${userId}`} />
//         <button onClick={() => setUserId(userId + 1)}>Switch User</button>
//       </div>
//     </div>
//   );
// }
