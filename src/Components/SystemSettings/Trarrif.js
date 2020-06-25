import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	container: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(4)
	},
	content: {
		flexGrow: 1,
		overflow: 'auto'
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
			width: 800,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3)
		}
	},
	backButton: {
		marginRight: theme.spacing(3)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '25ch'
	}
}));
function getSteps() {
	return [ 'New Meter Details', 'Data Confirmation', 'Data Added' ];
}

export default function Trarrif() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = useState(0);
	const [ User, setUser ] = useState({
		data: []
	});
	const steps = getSteps();

	const handleNext = () => {
		console.log(User);
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const onSubmit = (fields) => {
		//console.log('Frommanget Fiels:', fields);
		setUser({ data: [ ...User.data, fields ] });
	};

	return (
		<div className={classes.layout}>
			<Paper className={classes.paper}>
				<TextField
					id='outlined-basic'
					label='Old Password'
					variant='outlined'
					style={{ margin: 8 }}
					fullWidth
				/>
				<TextField
					id='outlined-basic'
					label='New Password'
					variant='outlined'
					style={{ margin: 8 }}
					fullWidth
				/>
				<TextField
					id='outlined-basic'
					label='Confrim New Password'
					variant='outlined'
					style={{ margin: 8 }}
					fullWidth
				/>
				<Button variant='contained' color='primary' onClick={handleBack} className={classes.backButton}>
					Save
				</Button>
				<Button variant='contained' color='primary' onClick={handleBack} className={classes.backButton}>
					Cancel
				</Button>
			</Paper>
		</div>
	);
}
