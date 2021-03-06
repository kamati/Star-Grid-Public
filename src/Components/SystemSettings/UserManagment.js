import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import { Component } from 'react';

export class UserManagment extends Component {
	state = {
		meterData: []
	};
	stateData = {
		meterData: [],
		ColumData: [
			{ title: 'Meter Number ', field: 'MeterNumber' },
			{ title: 'Location', field: 'Location' },
			{ title: 'Date/ Time', field: 'Date_time' },
			{ title: 'Alarm Type', field: 'AlarmType' },
			{ title: 'Alarm Code', field: 'AlarmCode' },
			{ title: 'Duration', field: 'Duration' }
		]
	};
	componentDidMount = async () => {
		var meterRequest = {
			key: 'StartGRID2020',
			SQLQuery: 'SELECT * FROM MeterNotification '
		};
		//console.log(JSON.stringify(meterRequest));
		const request = new Request(
			'https://cors-anywhere.herokuapp.com/https://stargridx.net/GetMeterNofications.php',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(meterRequest)
			}
		);

		const api_call = await fetch(request);
		const data = await api_call.json();
		this.setState({ meterData: data.Server_response });
		console.log(JSON.stringify(data));
	};
	render() {
		if (this.state.meterData != null) {
			return (
				<div>
					<Grid container>
						<Grid item lg={12} md={10} xl={12} xs={12}>
							<MaterialTable
								className={makeStyles.root}
								title='Users Count infromation'
								columns={[
									{ title: 'User Name ', field: 'MeterNumber' },
									{ title: 'Full Name', field: 'Location' },
									{ title: 'Telephone', field: 'Date_time' },
									{ title: 'Email', field: 'AlarmType' },
									{ title: ' Account Tyoe', field: 'AlarmCode' }
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
						title='Users Count infromation'
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

export default UserManagment;
