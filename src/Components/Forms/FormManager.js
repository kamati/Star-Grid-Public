import React, { useState, useEffect } from 'react';
import FormMeter from './FormMeter';
import Paper from '@material-ui/core/Paper';
import InfromationReview from './InfromationReview';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DataBaseUpdate from './DataBaseUpdate';

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
	}
}));
function getSteps() {
	return [ 'New Meter Details', 'Data Confirmation', 'Data Added' ];
}

export default function FormManager() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = useState(0);
	const [ User, setUser ] = useState({
		Data: {}
	});
	const steps = getSteps();

	const handleNext = () => {
		console.log(User);
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const getStepContent = (stepIndex) => {
		switch (stepIndex) {
			case 0:
				return <FormMeter onSubmit={(Fields) => onSubmit(Fields)} />;
			case 1:
				return <InfromationReview MeterUser={User.fields} />;
			case 2:
				return <DataBaseUpdate MeterUser={User.fields} />;
			default:
				return 'Unknown stepIndex';
		}
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const onSubmit = (fields) => {
		//console.log('Frommanget Fiels:', fields);
		setUser({ fields });
	};

	return (
		<div className={classes.layout}>
			<Paper className={classes.paper}>
				<div>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<div>
						{activeStep === steps.length ? (
							<div>
								<Typography className={classes.instructions}>All steps completed</Typography>
								<Button onClick={handleReset}>Reset</Button>
							</div>
						) : (
							<div>
								<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
								<div>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.backButton}>
										Back
									</Button>
									<Button variant='contained' color='primary' onClick={handleNext}>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</div>
							</div>
						)}
					</div>
				</div>
			</Paper>
		</div>
	);
}
