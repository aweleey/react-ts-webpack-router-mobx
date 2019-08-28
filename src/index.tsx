import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RootView from './layout/root';
import './bootstrap';
import './index.less';
import './assets/prism/prism.js';
import './assets/prism/prism.css';

ReactDOM.render(<RootView />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
