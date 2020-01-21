import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/app/App';
import * as serviceWorker from './serviceWorker';

// This is the JavaScript Entry Point. ReactDOM.render call lives here, we're
// rendering the Application component, which I haven't fully written yet.

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
