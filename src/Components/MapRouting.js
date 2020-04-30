import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import addMeter from './addMeter';
import MainTable from './Table/MainTable'

const MapRouting = () => (
	<Switch>
		<Route exact path='/MapDash/' component={Home} />
		<Route exact path='/MapDash/Grid' component={MainTable} />
		<Route exact path='/MapDash/Home' component={Home} />
	</Switch>
);
export default MapRouting;
