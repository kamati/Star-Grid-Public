import React, { Component } from 'react';
import Dashboard from './Dashboard';

export class MeterProps extends Component {
	componentDidMount = () => {};

	state = {
		activityMeter: []
	};
	render() {
		console.log(this.props);
		return <Dashboard />;
	}
}

export default MeterProps;
