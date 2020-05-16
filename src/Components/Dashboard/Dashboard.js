import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Home from '../Maps/home';
import SystemChart from './SystemChart';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import PowerSummary from './MeterCounts/PowerSummary';
import ActiveMeters from './MeterCounts/ActiveMeters';
import TotalMeters from './MeterCounts/TotalMeters';
import TotalSystemLoad from './MeterCounts/TotalSystemLoad';
import AreaCharts from './AreaPlot/AreaChart';
import WarningTables from './Tables/WarningTables';

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
	}
}));

export default function Dashboard() {
	const classes = useStyles();

	return (
		<div>
			<Grid container spacing={1}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalMeters />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<ActiveMeters />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<PowerSummary />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalSystemLoad />
				</Grid>

				<Grid item lg={6} md={10} xl={6} xs={12}>
					<Paper>
						<AreaCharts />
					</Paper>
				</Grid>

				<Grid item lg={6} md={10} xl={6} xs={12}>
					<WarningTables />
				</Grid>

				<Grid item lg={12} md={12} xl={12} xs={12}>
					<SystemChart />
				</Grid>
			</Grid>
		</div>
	);
}
