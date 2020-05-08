import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MapDash from './MapDash';
import systemSetting from './systemSetting';
import alarms from './alarms';
import GridTopology from './gridTopology';
import MeterProps from './MeterOverView/MeterProps';
import Home from './Maps/home';
import FormMeter from './FormMeter';
import HomeMaps from './Dashboard/HomeMaps';

const Main = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/gridTopology' component={Home} />
		<Route exact path='/systemSetting' component={systemSetting} />
		<Route exact path='/alarms' component={alarms} />
		<Route exact path='/FormMeter' component={FormMeter} />
		<Route exact path='/MeterProps/:id' component={MeterProps} />
		<Route exact path='/MapDash/:id' component={MapDash} />
	</Switch>
);
export default Main;
