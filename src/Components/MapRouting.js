import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import addMeter from './addMeter';

const MapRouting = () => (
	<Switch>
		<Route exact path='/MapDash/' component={addMeter} />
		<Route exact path='/MapDash/Grid' component={addMeter} />
		<Route exact path='/MapDash/Home' component={Home} />
	</Switch>
);
export default MapRouting;
