import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

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
        <p><Link to="/understanding">Understanding</Link></p>
        <p><Link to="/support">Support</Link></p>
        <p><Link to="/comments">Comments</Link></p>
        <p><Link to="/review">Review</Link></p>

        {/* Routes */}
        <Route path={"/feeling"} component={Feeling} />
        <Route path={"/understanding"} component={Understanding} />
        <Route path={"/support"} component={Support} />
        <Route path={"/comments"} component={Comments} />
        <Route path={"/review"} component={Review} />
      </Router>
    </div>
  );
}

export default App;
