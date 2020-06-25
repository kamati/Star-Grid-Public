import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trarrif from './Trarrif';
import UserManagment from './UserManagment';
import Password from './Password';
import ProfileInfo from './ProfileInfo';

const Routing = () => (
	<Switch>
		<Route exact path='/SystemSetting' component={Trarrif} />
		<Route exact path='/SystemSetting/Trarrif' component={Trarrif} />
		<Route exact path='/SystemSetting/UserManagment' component={UserManagment} />
		<Route exact path='/SystemSetting/Password' component={Password} />
		<Route exact path='/SystemSetting/ProfileInfo' component={ProfileInfo} />
	</Switch>
);
export default Routing;
