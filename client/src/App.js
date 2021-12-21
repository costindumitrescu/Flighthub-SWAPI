import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'
import Starships from './components/Starships'
import Search from './components/Search'



function App() {
const [people, setPeople] = useState([]);
const [planets, setPlanets] = useState([]);
const [starships, setStarships] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
  fetch('http://localhost:8000/people')
    .then(res => res.json())
    .then(data => {
      setPeople(data.results)
    });

    fetch('http://localhost:8000/planets')
    .then(res => res.json())
    .then(data => {
      setPlanets(data.results)
    });

    fetch('http://localhost:8000/starships')
    .then(res => res.json())
    .then(data => {
      setStarships(data.results)
    });

    fetch('http://localhost:8000/people/:id')
    .then(res => res.json())
    .then(data => {
      setSearch(data.results)
    });

}, []);



  return (
    <>
      <Router>
      <Navbar />
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/search">
              <Search/>
            </Route>
            <Route exact path="/people">
              <People data={people}/>
            </Route>
            <Route exact path="/planets">
              <Planets data={planets}/>
            </Route>
            <Route exact path="/starships">
              <Starships data={starships}/>
            </Route>
        </Switch>
    </Router>

    </>
  );
}

export default App;
