import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [people, setPeople] = useState([]);
// const [planets, setPlanets] = useState([]);
// const [load, setLoad] = useState(true);

useEffect(() => {
  fetch('http://localhost:8000/people')
    .then(res => res.json())
    .then(data => {
      setPeople(data.results)
    });
}, []);

  console.log(people);

  return (
    <div className="App">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default App;
