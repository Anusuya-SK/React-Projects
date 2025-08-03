import React, { useState } from 'react';

const data = ['Apple', 123, 'Banana', 12, 'Cherry', 'Grapes', 72345, 'Orange', 'Pineapple', 892043, 'Strawberry', 'Watermelon'];

function SearchFilter() {
    const[query, setQuery] = useState("");

    // Filter items based on query (case-insensitive)
    const filteredlist = data.filter(item => 
        //Only strings in the array
        //item.toLowerCase().includes(query.toLowerCase())
        //If strings and numbers in the array
        item.toString().toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div>
        <h2>Live Search Filter</h2>
        <input type='text' placeholder='Search a item here...' value={query} onChange={(e) => setQuery(e.target.value)} />
        {filteredlist.length > 0 ? (
            <ul>
            {filteredlist.map((item, index) => <li key={index}>{item}</li> )}
            </ul>
        ) : (
            <p>No items found</p>
        )}
        <hr />
    </div>
  )
}

export default SearchFilter