import React, { useState, useEffect } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';


function App() {

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  
  return (!robots.length) ?
    <h1>Loading</h1> :
  (
    <div className="App tc">
      <header className="App-header">
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardArray robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>  
      </header>
    </div>
  );

}

export default App;
