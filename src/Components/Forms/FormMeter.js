import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

export default class FormMeter extends Component {
	state = {
		FirstName: '',
		LastName: '',
		Region: '',
		City: '',
		ErfNumber: '',
		Constituency: '',
		StreetName: '',
		MeterNumber: '',
		MeterPhoneNumber: '',
		UserCategory: ''
	};

	Change = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		this.props.onSubmit(this.state);
		console.log(this.state);
	};

	render() {
		return (
			<React.Fragment>
				<Typography variant='h6' gutterBottom>
					New Meter Infromation
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							id='FirstName'
							name='FirstName'
							label='First name'
							value={this.state.FirstName}
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							value={this.state.LastName}
							required
							id='lastName'
							name='LastName'
							label='Last name'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id='Region'
							name='Region'
							label='Region'
							value={this.state.Region}
							fullWidth
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							value={this.state.City}
							required
							id='City'
							name='City'
							label='City'
							fullWidth
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							value={this.state.Constituency}
							id='Constituency'
							name='Constituency'
							label='Constituency'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							value={this.state.StreetName}
							id='StreetName'
							name='StreetName'
							label='Street Name'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={this.state.ErfNumber}
							id='ErfNumber'
							name='ErfNumber'
							label='Erf Number'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={this.state.MeterNumber}
							id='MeterNumber'
							name='MeterNumber'
							label='Meter Number'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={this.state.MeterPhoneNumber}
							id='MeterPhoneNumber'
							name='MeterPhoneNumber'
							label='Meter Phone Number'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={this.state.UserCategory}
							id='UserCategory'
							name='UserCategory'
							label='User Category'
							onChange={(e) => this.Change(e)}
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}
