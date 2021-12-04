import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import components
import Feeling from '../Feeling/Feeling';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        {/* Temporary links */}
        <p><Link to="/">Home</Link></p>
        <p><Link to="/feeling">Feeling</Link></p>

         {/* Routes */}
        <Route path={"/feeling"} component={Feeling} />
      </Router>
    </div>
  );
}

export default App;
