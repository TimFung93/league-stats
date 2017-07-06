import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render((
	<Router history={Router} >
		<Route path='/' component={Header} />
	</Router>
), document.getElementById('root'))


