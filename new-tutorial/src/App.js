import React, { useState, useEffect } from 'react';
import './App.css';
import Person from './Person';

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
    email: '',
    phone: ''
  });

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('people');
    if (stored) setPeople(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, age, email, phone } = formData;

    if (!fname || !lname || !age || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    setPeople(prev => [...prev, formData]);
    setFormData({ fname: '', lname: '', age: '', email: '', phone: '' });
  };

  const handleDelete = (indexToDelete) => {
    setPeople(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleClearAll = () => {
    setPeople([]);
    localStorage.removeItem('people');
  };

  return (
    <div className="App">
      <h1>User Info Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} />
        <input name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
        <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {people.length > 0 && (
        <>
          <h2>Submitted Users ({people.length})</h2>
          <button onClick={handleClearAll}>Clear All</button>
        </>
      )}

      {people.map((p, index) => (
        <Person key={index} data={p} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
}

export default App;
