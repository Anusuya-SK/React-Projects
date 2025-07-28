import React, { useState } from 'react'

function ToggleDiv() {
    const[show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(!show);
    }
  return (
    <div>
        <h2>Toggle a Div</h2>
        <button onClick={handleToggle}>{show ? "Hide" : "Show"} Div</button>
        {show && 
            <div>
                <p>This is toggle Div</p>
                <p>On toggle this will show/hide</p>
            </div>
        }
        <hr />
    </div>
  )
}

export default ToggleDiv