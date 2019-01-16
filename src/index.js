import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormikApp from './App';
import * as serviceWorker from './serviceWorker';
import Yup from 'yup';

ReactDOM.render(<FormikApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
