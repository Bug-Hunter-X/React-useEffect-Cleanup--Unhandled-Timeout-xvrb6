```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran!');
    return () => {
      // Cleanup function, not always necessary but good practice
      console.log('Cleanup function ran!');
    };
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    // This effect runs when count changes
    console.log('Count changed to:', count);
    // Simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      console.log('Asynchronous operation completed!');
    }, 1000);
    return () => {
      // Cleanup function to cancel the timeout
      clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```