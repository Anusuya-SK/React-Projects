import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from './ThemeContext';

function UseStateUseEffectHook() {
  //const theme = useContext(ThemeContext); // single value
  const { theme, toggleTheme } = useContext(ThemeContext); // object
  const[count, setCount] = useState(0);

  useEffect(() => {
    if(count >= 50) return;

    const timeout = setTimeout(() => {
      //console.log("set");
      setCount(prev => prev + 1);
    }, 1000);

    return() => {
      //console.log("clear");
      clearTimeout(timeout) //cleanup
    }
  },[count]); // Dependency array

  // useEffect(() => {
  //   if (count >= 50) return; // Stop when count reaches 50

  //   const interval = setInterval(() => {
  //     setCount(prev => prev + 1);
  //   }, 100); // Change speed here (ms)

  //   return () => clearInterval(interval); // Cleanup
  // }, [count]);

  return (
    <div>
        <p>Count: {count}</p>
        <p>Current Theme is {theme}</p>
        <p>Newly changed theme: {theme}</p>
        <button onClick={toggleTheme}>One more button to theme</button>
    </div>
  )
}

export default  UseStateUseEffectHook

// ✅ In your specific code (where you're counting from 1 to 50, increasing every 100ms and then stopping), setTimeout is better than setInterval.

//   | Criteria                         | `setTimeout` (used in your code)           | `setInterval`                                          |
// | -------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
// | **Control per step**             | ✅ Full control — decide next step manually | ❌ Automatically repeats — less control                 |
// | **Stops cleanly at 50**          | ✅ Easy — just don't schedule next timeout  | ✅ Can work — but needs `clearInterval`                 |
// | **Avoids overlap issues**        | ✅ No risk of overlapping calls             | ❌ If the update is slow, intervals can pile up         |
// | **Adjustable timing**            | ✅ Delay can change per step (if needed)    | ❌ Always fixed unless cleared & reset                  |
// | **Resource management**          | ✅ Clean and predictable                    | ❌ Can leave dangling intervals if not cleared properly |
// | **Code simplicity for this use** | ✅ Cleaner and declarative                  | ❌ Slightly more complex to stop reliably               |
