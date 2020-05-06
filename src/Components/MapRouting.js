import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import addMeter from './addMeter';
import MainTable from './Table/MainTable';
import Dashboard from './Dashboard/Dashboard';
import HomeMaps from './Dashboard/HomeMaps';

const MapRouting = () => (
	<Switch>
		<Route exact path='/MapDash/2' component={HomeMaps} />
		<Route exact path='/MapDash/Grid' component={MainTable} />
		<Route exact path='/MapDash/Home2' component={HomeMaps} />
		<Route exact path='/MapDash/Dashboard' component={Dashboard} />
	</Switch>
);
export default MapRouting;
