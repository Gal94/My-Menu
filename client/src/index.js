import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './store/reducers/authReducer';
import UiReducer from './store/reducers/UiReducer';
import './index.css';
import App from './App';

// Add reducers here
const rootReducer = combineReducers({ auth: authReducer, ui: UiReducer });

// Enable dev tools for debugging
const composeEnhancers =
    (process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null) || compose;

// Define store and add support for thunk
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
