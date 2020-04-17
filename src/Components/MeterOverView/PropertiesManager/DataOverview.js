import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WeeklyChart from './WeeklyChart';
import Livechart from '../Livechart';

function DataOverview() {
	return (
		<div>
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item xs={12}>
					<Paper elevation={0}>
						<Livechart />
					</Paper>
				</Grid>
				{/* Recent Deposits md={4} lg={3}*/}
				<Grid item xs={12}>
					<Paper elevation={0}>
						<WeeklyChart />
					</Paper>
				</Grid>
				{/* Recent Deposits md={4} lg={3}*/}
				<Grid item xs={12}>
					<Paper elevation={0} />
				</Grid>
			</Grid>
		</div>
	);
}

export default DataOverview;
