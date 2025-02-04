import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Background style animation
  const backgroundStyle = useSpring({
    backgroundColor: count > 10 
      ? `rgba(255, 0, 0, ${Math.min(count / 20, 1)})` // Switch to red for high counts
      : `rgba(0, 128, 255, ${Math.min(count / 10, 1)})`, // Blue for lower counts
    config: { duration: 300 },
  });
  

  return (
    <animated.div
      className="p-5 text-center rounded-lg"
      style={backgroundStyle}
    >
      {/* Display Count */}
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      {/* Action Buttons */}
      <div className="mt-4 space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </animated.div>
  );
};

export default Counter;
