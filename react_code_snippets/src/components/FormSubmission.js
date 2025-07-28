import React, { useState } from 'react'

function FormSubmission() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[display, setDisplay] = useState({name:"", email:""});

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent form from refreshing the page
        setDisplay({name, email});
    }
  return (
    <div>
        <h2>Form Submission</h2>
        <h4>Name: {display.name}</h4>
        <h4>Email: {display.email}</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter a email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        <hr />
    </div>
  )
}

export default FormSubmission