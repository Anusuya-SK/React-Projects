import React, { useState } from 'react';

const data = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon'];

function SearchFilter() {
    const[query, setQuery] = useState("");

    // Filter items based on query (case-insensitive)
    const filteredlist = data.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
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