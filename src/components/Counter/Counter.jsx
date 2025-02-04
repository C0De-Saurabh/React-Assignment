const Counter = () => {
    const [count, setCount] = useState(0);
  
    const backgroundStyle = useSpring({
      backgroundColor: `rgba(0, 128, 255, ${Math.min(count / 10, 1)})`,
      config: { duration: 300 },
    });
  
    return (
      <animated.div 
        className="p-5 text-center rounded-lg"
        style={backgroundStyle}
      >
        <h1 className="text-2xl font-bold">Count: {count}</h1>
        <div className="mt-4 space-x-2">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded" 
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded" 
            onClick={() => setCount(count - 1)} 
            disabled={count === 0}
          >
            Decrement
          </button>
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded" 
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </animated.div>
    );
  };