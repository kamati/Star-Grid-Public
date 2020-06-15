import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TransactionHistory from './TransactionHistory';
import Livechart from '../Livechart';
import MeterInformation from './MeterInformation';
import WeeklyBargraphs from '../AreaPlot/WeeklyBargraphs';
import MapLocation from './MapLocation';

function DataOverview(props) {
	console.log('DataOverview:props.meter');
	console.log(props.location.state);
	return (
		<div>
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item lg={12} md={12} xl={12} xs={12}>
					<Paper elevation={0}>
						<MeterInformation selectedMeter={props.location.state} />
					</Paper>
				</Grid>
				{/* Recent Deposits md={4} lg={3}*/}
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<Paper elevation={0}>
						<WeeklyBargraphs />
					</Paper>
				</Grid>
				{/* Recent Deposits md={4} lg={3}*/}
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<Paper elevation={0}>
						<MapLocation />
					</Paper>
				</Grid>
				{/* Recent Deposits md={4} lg={3}*/}
				<Grid item lg={12} md={12} xl={12} xs={12}>
					<Paper elevation={0}>
						<Livechart />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default DataOverview;
