import React, { useLayoutEffect, useRef, useEffect, useState  } from 'react'

function UseLayoutEffectHook() {
    const boxRef = useRef();
    const [width, setWidth] = useState(0);

    // useLayoutEffect(() => {
    //     // Scroll box to the bottom immediately after render
    //     boxRef.current.scrollTop = boxRef.current.scrollHeight; 
    // },[])

    useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);


  return (
    // <div ref={boxRef} style={{ height: "100px", overflowY: "auto", border: "1px solid black" }}>
    //     {Array.from({length:30},(_,i) => (
    //         <p key={i}>Item {i+1}</p>
    //     ))}
    // </div>
    <div>
      <div ref={boxRef} style={{ width: "1000px", height: "50px", background: "lightblue" }}>
        Resize me!
      </div>
      <p>Width: {width}px</p>
    </div>
  )
}

export default UseLayoutEffectHook

// First, about the React render cycle:
// Render phase: React builds the virtual DOM.
// Commit phase: React applies changes to the real DOM.
// Browser paints: User sees the UI update.
// Effects run (useLayoutEffect or useEffect).