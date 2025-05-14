import './App.css';
import { useState } from 'react';
import NewComponent from './NewComponent';

const Person = (props) => {
  return (
    <>
    <h1>First Name: {props.fname}</h1>
    <h2>Last Name: {props.lname}</h2>
    <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <NewComponent/>

      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      <h3>Three things i learned about:</h3>
      <ul>
        <li>Components</li>
        <li>States</li>
        <li>Props</li>
      </ul>
       <h1>Hello World !!</h1>
       <h2>This is some practice code.</h2>

       <Person fname="Jack" lname="Grealish" age={25}></Person>
       <Person fname="John" lname="Doe" age={30}></Person>
       <Person fname="Mary" lname="Jane" age={22+9}></Person>
    </div>
  );
}

export default App;
