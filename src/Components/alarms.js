/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export class alarms extends Component {
	render() {
		return (
			<Router>
				<h1>there routing</h1>
			</Router>
		);
	}
}

function home() {
	return <div>Welcome Home!</div>;
}

export default alarms;
