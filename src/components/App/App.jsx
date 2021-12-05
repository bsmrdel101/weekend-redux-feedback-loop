import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';

function App() {
  // const feedbackResults = useSelector((store) => store.feedbackReducer);

  // const addFeedback = () => {
  //   axios({
  //     method: 'POST',
  //     url: '/feedback',
  //     data: feedbackResults
  //   }).then((response) => {
  //     console.log('response: ', response);
  //   }).catch((error) => {
  //     console.log('error: ', error);
  //   })
  // }

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        {/* Routes */}
        <Route exact path={"/"} component={Home} />
        <Route path={"/feeling"} component={Feeling} />
        <Route path={"/understanding"} component={Understanding} />
        <Route path={"/support"} component={Support} />
        <Route path={"/comments"} component={Comments} />
        <Route path={"/review"} component={Review} />
        <Route path={"/submission"} component={Submission} />
        <Route path={"/admin"} component={Admin} />
      </Router>
    </div>
  );
}

export default App;
