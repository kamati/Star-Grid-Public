import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import img2 from './map_icon_gray.png';

const useStyles = makeStyles((theme) => ({
	photo: {
		height: '50px',
		width: '50px'
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
		height: 32,
		width: 32
	},
	progress: {
		//marginTop: theme.spacing(3)
	}
}));

const TotalMeters = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<CardContent>
				<Grid container justify='space-between'>
					<Grid item>
						<Typography className={classes.title} color='textSecondary' gutterBottom variant='body2'>
							Total Meters
						</Typography>
						<Typography variant='h4'>300 000</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<img src={img2} className={classes.photo} />
						</Avatar>
					</Grid>
				</Grid>
				<LinearProgress className={classes.progress} value={75.5} variant='determinate' />
			</CardContent>
		</Card>
	);
};

TotalMeters.propTypes = {
	className: PropTypes.string
};

export default TotalMeters;
