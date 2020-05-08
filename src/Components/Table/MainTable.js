import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import UserToolbar from './UserToolbar';

import { Component } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(4)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

export class MainTable extends Component {
	state = {
		meterData: []
	};
	stateData = {
		meterData: [],
		ColumData: [
			{ title: 'ID', field: 'ID' },
			{ title: 'Surname', field: 'Surname' },
			{ title: 'Name', field: 'Name' },
			{ title: 'Region', field: 'Region' },
			{ title: 'City', field: 'City' },
			{ title: 'Constituency ', field: 'Constituency' },
			{ title: 'Street Name', field: 'StreetName' },
			{ title: 'ErfNumber ', field: 'ErfNumber' },
			{ title: 'Meter  Number ', field: 'MeterNumber' },
			{ title: 'Phone Number', field: 'PhoneNumber' },
			{ title: 'User Category', field: 'UserCategory' },
			{ title: 'PhoneNumber', field: 'PhoneNumber' },

			{ title: 'Registration Date', field: 'RegistrationDate', type: 'numeric' }
		]
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
				<div>
					<Grid container direction='column' justify='space-evenly' alignItems='stretch'>
						<Grid item lg={12} md={10} xl={12} xs={12}>
							<UserToolbar />
							<MaterialTable
								className={makeStyles.root}
								title='Smart Meters'
								columns={[
									{ title: 'ID', field: 'ID' },
									{ title: 'Surname', field: 'Surname' },
									{ title: 'Name', field: 'Name' },
									{ title: 'Region', field: 'Region' },
									{ title: 'City', field: 'City' },
									{ title: 'Constituency ', field: 'Constituency' },
									{ title: 'Street Name', field: 'StreetName' },
									{ title: 'ErfNumber ', field: 'ErfNumber' },
									{ title: 'Meter  Number ', field: 'MeterNumber' },
									{ title: 'Phone Number', field: 'PhoneNumber' },
									{ title: 'User Category', field: 'UserCategory' },
									{ title: 'PhoneNumber', field: 'PhoneNumber' },

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
						</Grid>
					</Grid>
				</div>
			);
		}
		{
			return (
				<div>
					<MaterialTable
						title='Smart Meters'
						columns={this.state.ColumData}
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
				</div>
			);
		}
	}
}

export default MainTable;
