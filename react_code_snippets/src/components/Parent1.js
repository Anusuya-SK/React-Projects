import React, { useState } from 'react'
import Child1 from './Child1'

function Parent1() {
    const[age, setAge] = useState("");
    const[city, setCity] = useState("");
    const[display, setDisplay] = useState({age:"", city: ""});

    const handleSubmit = (data) => {
        setDisplay({age: data.age, city: data.city});
    }
  return (
    <div>
        <h2>Pass Data from Child to Parent </h2>
        <h3>Age: {display.age}</h3>
        <h3>City: {display.city}</h3>
        <input type="number" placeholder="Enter a age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" placeholder="Enter a city" value={city} onChange={(e) => setCity(e.target.value)} />
        <Child1 onSubmit={handleSubmit} data={{age, city}} />
        <hr />
    </div>
  )
}

export default Parent1