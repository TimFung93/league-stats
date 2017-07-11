import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import Main from './Components/Main';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render((
	<Router history={Router} >
		<Route path='/' component={Main} />
	</Router>
), document.getElementById('root'))


