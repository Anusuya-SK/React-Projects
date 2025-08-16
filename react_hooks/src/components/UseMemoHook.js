import React, { useState, useMemo } from 'react'

function UseMemoHook() {
  const [filter, setFilter] = useState("");

  // Sample data
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const filteredNumbers = useMemo(() => {
    console.log("Filtering...");
    return numbers.filter(num => num.toString().includes(filter));
  }, [numbers, filter]);

  return (
    <div>
      <h2>useMemo Hook</h2>
      <input 
        placeholder="Filter numbers"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filteredNumbers.map(num => <li key={num}>{num}</li>)}
      </ul>
    </div>
  );
}

export default UseMemoHook