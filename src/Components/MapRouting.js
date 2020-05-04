import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import addMeter from './addMeter';
import MainTable from './Table/MainTable';
import Dashboard from './Dashboard/Dashboard';

const MapRouting = () => (
	<Switch>
		<Route exact path='/MapDash/2' component={Dashboard} />
		<Route exact path='/MapDash/Grid' component={MainTable} />
		<Route exact path='/MapDash/Home' component={addMeter} />
		<Route exact path='/MapDash/Dashboard' component={Dashboard} />
	</Switch>
);
export default MapRouting;
