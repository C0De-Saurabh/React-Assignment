import { useState, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { IconButton } from '@mui/material';
import { Add, Remove, Refresh } from '@mui/icons-material'; // Importing MUI Icons

const Counter = () => {
  const [count, setCount] = useState(0);

  // Background style animation with smooth transition from white to dark blue
  const backgroundStyle = useSpring({
    backgroundColor: `rgba(0, 51, 102, ${Math.min(count / 30, 1)})`, // Smooth transition from white to dark blue
    config: { duration: 500, easing: (t) => t * (2 - t) }, // Smooth easing function
    transform: 'scale(1.05)', // Slightly scale up the background for more visual impact
  });

  // Count animation
  const countAnimation = useSpring({
    number: count,
    from: { number: count - 1 }, // Starts from the previous count
    reset: true,
    config: { tension: 300, friction: 15 }, // Bounce effect on count change
  });

  // Button hover animation
  const buttonStyle = useSpring({
    to: { scale: 1.05 },
    from: { scale: 1 },
    config: { friction: 25, tension: 200 },
  });

  // Memoized button click handlers
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => Math.max(prev - 1, 0)), []);
  const reset = useCallback(() => setCount(0), []);

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <animated.div
        className="text-center rounded-lg shadow-lg w-full h-screen flex flex-col items-center justify-center"
        style={backgroundStyle}
        aria-live="polite"
      >
        {/* Display Count with animation */}
        <animated.h1 className="text-5xl font-bold text-white mb-6">
          {countAnimation.number.to((n) => Math.round(n))}
        </animated.h1>

        {/* Action Buttons with MUI Icons and Text */}
        <div className="flex space-x-4">
          <animated.div style={buttonStyle}>
            <IconButton
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all transform duration-200 ease-in-out"
              onClick={increment}
              aria-label="Increment"
            >
              <Add />
              <span className="ml-2">Increment</span>
            </IconButton>
          </animated.div>

          <animated.div style={buttonStyle}>
            <IconButton
              className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-all transform duration-200 ease-in-out"
              onClick={decrement}
              disabled={count === 0}
              aria-label="Decrement"
            >
              <Remove />
              <span className="ml-2">Decrement</span>
            </IconButton>
          </animated.div>

          <animated.div style={buttonStyle}>
            <IconButton
              className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition-all transform duration-200 ease-in-out"
              onClick={reset}
              aria-label="Reset"
            >
              <Refresh />
              <span className="ml-2">Reset</span>
            </IconButton>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
};

export default Counter;
