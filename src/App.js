import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const employeeName = ['Mushfiqur R', 'M Riyad', 'S A Hasan'];
  const products = [
    {name: 'Photoshop', price: '$199.99'},
    {name: 'Illustrator', price: '$99.99'},
    {name: 'Adobe XD', price: '$299.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>

        <Users></Users>
        <Counts></Counts>
        <ul>
          {
            employeeName.map(name => <li>{name}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        
        {
          products.map(pd => <Products products={pd}></Products>)
        }

        <Employee name={employeeName[0]} position="Wk Batsman" salary="10 lac" experience="15 Yrs"></Employee>
        <Employee name={employeeName[1]} position="Middle O. Batsman" salary="10 lac" experience="16 Yrs"></Employee>
        <Employee name={employeeName[2]} position="All Rounder" salary="12 lac" experience="14 Yrs"></Employee>

      </header>
    </div>
  );
}

//Employee Component
function Employee(props){
  const personStyle = {
    backgroundColor: 'cyan',
    margin: '10px',
    padding: '20px',
    border: '2px solid red',
    color: 'black',
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Position: {props.position}</p>
      <p>Salary: {props.salary}</p>
      <p>Experience: {props.experience}</p>
    </div>
  );
}

//Counts component
function Counts(){
  const [count, setCount] = useState(10);
  const [keySelector, keySet] = useState("");
  return(
    <div>
      <h1>Counts: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <h4>Keypress: <span>{keySelector}</span></h4>
      <input onKeyPress={(e) => keySet(e.key)} type="text"/>
    </div>
  )
}

//Users component
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

//Products component
function Products(props){
  const productsStyle = {
    backgroundColor: 'lightblue',
    color: 'black',
    width: '200px',
    border: '1px solid grey',
    borderRadius: '15px',
    margin: '10px',
    padding: '10px'
  }
  const {name, price} = props.products;
  return(
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
