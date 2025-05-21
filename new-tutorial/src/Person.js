import React from 'react';
import './Person.css';

const Person = ({ data, onDelete }) => {
  const { fname, lname, age, email, phone } = data;

  return (
    <div className="person-card">
      <h1>{fname} {lname}</h1>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Person;
