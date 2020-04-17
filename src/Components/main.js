import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import addMeter from './addMeter';
import systemSetting from './systemSetting';
import alarms from './alarms';
import gridTopology from './gridTopology';
import MeterProps from './MeterOverView/MeterProps';

const Main = () => (
	<Switch>
		<Route exact path='/home' component={home} />
		<Route exact path='/gridTopology' component={gridTopology} />
		<Route exact path='/systemSetting' component={systemSetting} />
		<Route exact path='/addMeter' component={addMeter} />
		<Route exact path='/alarms' component={alarms} />
		<Route path='/MeterProps/:id' component={MeterProps} />
	</Switch>
);
export default Main;
