import React from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';

import { Component } from 'react';

export class MainTable extends Component {
	state = {
		meterData: []
	};
	stateData = {
		meterData: []
	};
	componentDidMount = async () => {
		var meterRequest = {
			key: 'StartGRID2020',
			SQLQuery: 'SELECT * FROM UserDetails '
		};
		//console.log(JSON.stringify(meterRequest));
		const request = new Request('https://cors-anywhere.herokuapp.com/https://stargridx.net/GetUserProfile.php', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(meterRequest)
		});

		const api_call = await fetch(request);
		const data = await api_call.json();
		this.setState({ meterData: data.Server_response });
		console.log(JSON.stringify(data));
	};
	render() {
		if (this.state.meterData != null) {
			return (
				<MaterialTable
					title='Smart Meters'
					columns={[
						{ title: 'ID', field: 'ID' },
						{ title: 'Surname', field: 'Surname' },
						{ title: 'Name', field: 'Name' },
						{ title: 'Region', field: 'Region' },
						{ title: 'City', field: 'City' },
						{ title: 'Constituency ', field: 'Constituency' },
						{ title: 'StreetName', field: 'StreetName' },
						{ title: 'ErfNumber ', field: 'ErfNumber' },
						{ title: 'Meter  Number ', field: 'MeterNumber' },
						{ title: 'Phone Number', field: 'PhoneNumber' },
						{ title: 'User Category', field: 'User Category' },
						{ title: 'PhoneNumber', field: 'Phone Number' },

						{ title: 'Registration Date', field: 'RegistrationDate', type: 'numeric' }
					]}
					data={this.state.meterData}
					editable={{
						onRowAdd: (newData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									this.setState((prevState) => {
										const data = [ ...prevState.data ];
										data.push(newData);
										return { ...prevState, data };
									});
								}, 600);
							}),
						onRowUpdate: (newData, oldData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									if (oldData) {
										this.setState((prevState) => {
											const data = [ ...prevState.data ];
											data[data.indexOf(oldData)] = newData;
											return { ...prevState, data };
										});
									}
								}, 600);
							}),
						onRowDelete: (oldData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									this.setState((prevState) => {
										const data = [ ...prevState.data ];
										data.splice(data.indexOf(oldData), 1);
										return { ...prevState, data };
									});
								}, 600);
							})
					}}
				/>
			);
		}
		{
			return (
				<MaterialTable
					title='Smart Meters'
					columns={[
						{ title: 'Name', field: 'name' },
						{ title: 'Surname', field: 'surname' },
						{ title: 'Region', field: 'region' },
						{ title: 'City', field: 'city' },
						{ title: 'Constituency', field: 'constituency' },
						{ title: 'Street Name ', field: 'streetName ' },
						{ title: 'Erf Number ', field: 'ErfNumber ' },
						{ title: 'Meter Number ', field: 'meterNumber' },
						{ title: 'Meter Phone Number ', field: 'meterPhoneNumber' },
						{ title: 'User Category ', field: 'userCategory' },
						{ title: 'Registration Date', field: 'registrationData', type: 'numeric' }
					]}
					editable={{
						onRowAdd: (newData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									this.setState((prevState) => {
										const data = [ ...prevState.data ];
										data.push(newData);
										return { ...prevState, data };
									});
								}, 600);
							}),
						onRowUpdate: (newData, oldData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									if (oldData) {
										this.setState((prevState) => {
											const data = [ ...prevState.data ];
											data[data.indexOf(oldData)] = newData;
											return { ...prevState, data };
										});
									}
								}, 600);
							}),
						onRowDelete: (oldData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									this.setState((prevState) => {
										const data = [ ...prevState.data ];
										data.splice(data.indexOf(oldData), 1);
										return { ...prevState, data };
									});
								}, 600);
							})
					}}
				/>
			);
		}
	}
}

export default MainTable;
