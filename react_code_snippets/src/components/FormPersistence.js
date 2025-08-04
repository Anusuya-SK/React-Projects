import React, { useState, useEffect } from 'react';

function PersistForm() {
  const [formData, setFormData] = useState(() => {
    // 🟡 Initialize from localStorage only once
    const saved = localStorage.getItem('formData');
    return saved ? JSON.parse(saved) : { name: '', email: '' };
  });

  // 💾 Save to localStorage every time formData changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target; //Destructure
    setFormData(prev => ({ 
      ...prev, //Spread operator
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
    // Optionally clear localStorage and reset form:
    // localStorage.removeItem('formData');
    // setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PersistForm;
