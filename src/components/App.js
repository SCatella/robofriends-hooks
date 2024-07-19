import React, { useState, useEffect } from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

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
      <div className="App">
        <header className='App-header'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
        </header>
        <main className='App-main'>
          <Scroll>
            <ErrorBoundary>
              <CardArray robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </main>
    </div>
  );

}

export default App;
