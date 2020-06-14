import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MapDash from './MapDash';
import systemSetting from './systemSetting';
import Alarms from './Alarms/Alarms';
import GridTopology from './gridTopology';
import MeterProps from './MeterOverView/MeterProps';
import FormManager from './Forms/FormManager';

const Main = () => (
	<Switch>
		<Route exact path='/' component={MapDash} />
		<Route exact path='/gridTopology' component={GridTopology} />
		<Route exact path='/systemSetting' component={systemSetting} />
		<Route exact path='/alarms' component={Alarms} />
		<Route exact path='/FormMeter' component={FormManager} />
		<Route exact path='/MeterProps/:id' component={MeterProps} />
		<Route exact path='/MapDash/:id' component={MapDash} />
	</Switch>
);
export default Main;
