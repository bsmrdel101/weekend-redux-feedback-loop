import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux reducers
const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK_SCORE':
            return [...state, action.payload];
        case 'CLEAR_FEEDBACK':
            return [];
        default:
            return state;
    }
}


// Redux store
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
