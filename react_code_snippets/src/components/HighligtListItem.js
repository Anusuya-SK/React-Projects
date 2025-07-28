import React, { useState } from 'react'

function HighligtListItem() {
    const list = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    const[hightlight, setHighlight] = useState(null);

    const highLightColor = {
        backgroundColor: "red",
        padding: "6px", 
        textAlign: "center", 
        fontSize: "25px", 
        marginBottom: "10px"
    }

    const nonHighlightColor = {
        backgroundColor: "#d1cfcf",
        padding: "6px", 
        textAlign: "center", 
        fontSize: "25px", 
        marginBottom: "10px"
    }

    const highlightItem = (index) => {
        if(hightlight === index) {
            return setHighlight(null);
        } 
        setHighlight(index);
    }

  return (
    <div>
        <h2>Highlight a List Item on Click</h2>
        <ul style={{paddingLeft: 0}}>
            {list.map((item, index) => {
                return <li key={index} onClick={() => highlightItem(index)} style={hightlight === index ? highLightColor : nonHighlightColor}>{item}</li>
            })}
        </ul>
        <hr />
    </div>
  )
}

export default HighligtListItem