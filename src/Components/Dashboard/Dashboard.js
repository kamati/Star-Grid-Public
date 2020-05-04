import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Home from '../home';
import SystemChart from './SystemChart';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import PowerSummary from './PowerSummary';
import AreaCharts from './AreaPlot/AreaChart';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	container: {
		//paddingTop: theme.spacing(4),
		//paddingBottom: theme.spacing(4)
	},
	paper: {
		//padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 440
	}
}));

export default function Dashboard() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
		<div>
			<Grid container spacing={1}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<PowerSummary />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<PowerSummary />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<PowerSummary />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<PowerSummary />
				</Grid>

				<Grid item lg={12} md={12} xl={12} xs={12}>
					<Paper className={fixedHeightPaper}>
						<Home />
					</Paper>
				</Grid>

				<Grid item lg={12} md={10} xl={12} xs={12}>
					<SystemChart />
				</Grid>
				<Grid item lg={12} md={12} xl={12} xs={12}>
					<AreaCharts />
				</Grid>
			</Grid>
		</div>
	);
}
