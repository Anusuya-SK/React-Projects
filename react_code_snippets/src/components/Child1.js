import React from 'react'

function Child1({onSubmit, data}) {
    const { age, city } = data;
  return (
    <div>
        <button onClick={() => onSubmit(data)} type="Submit">Submit</button>
    </div>
  )
}

export default Child1