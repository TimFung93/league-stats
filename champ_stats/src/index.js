import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import Main from './Components/Main';
import Champion from './Components/Champion';

import {Router, Route, IndexRoute} from 'react-router';
import { createHashHistory } from 'history';
import {Link, HashRouter} from 'react-router-dom';

ReactDOM.render((
	<HashRouter>
		<div>
			<Route exact path="/" component={Main} />
        	<Route path="/:id" name="champion" component={Champion} />
        	<Route path="/searchbar" component={Searchbar} />
        	<Route path="/header" component={Header} />
        </div>
		
	</HashRouter>
), document.getElementById('root'));


