import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import img2 from './electric.png';

const useStyles = makeStyles((theme) => ({
	photo: {
		height: '55px',
		width: '55px'
	},
	root: {
		height: '99%'
	},
	content: {
		alignItems: 'center',
		display: 'flex'
	},
	title: {
		fontWeight: 700
	},
	avatar: {
		//backgroundColor: theme.palette.primary.main,
		//color: theme.palette.primary.contrastText,
		height: 56,
		width: 56
	},
	icon: {
		height: 38,
		width: 38
	},
	progress: {
		//marginTop: theme.spacing(3)
	}
}));
const TotalSystemLoad = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();
	const handleBack = () => {
		console.log('Linked the power button');
	};

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<CardContent>
				<Grid container justify='space-between'>
					<Grid item>
						<Typography className={classes.title} color='textSecondary' gutterBottom variant='body2'>
							Total System Load
						</Typography>
						<Typography variant='h4'>1230 kWh</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<img src={img2} className={classes.icon} onClick={handleBack} />
						</Avatar>
					</Grid>
				</Grid>
				<LinearProgress className={classes.progress} value={75.5} variant='determinate' />
			</CardContent>
		</Card>
	);
};

TotalSystemLoad.propTypes = {
	className: PropTypes.string
};

export default TotalSystemLoad;
