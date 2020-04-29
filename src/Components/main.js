import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MapDash from './MapDash';
import systemSetting from './systemSetting';
import alarms from './alarms';
import GridTopology from './GridTopology';
import MeterProps from './MeterOverView/MeterProps';
import Home from './Home';

const Main = () => (
	<Switch>
		<Route exact path='/Home' component={Home} />
		<Route exact path='/gridTopology' component={GridTopology} />
		<Route exact path='/systemSetting' component={systemSetting} />
		<Route exact path='/alarms' component={alarms} />
		<Route exact path='/MeterProps/:id' component={MeterProps} />
		<Route exact path='/MapDash/:id' component={MapDash} />
	</Switch>
);
export default Main;
