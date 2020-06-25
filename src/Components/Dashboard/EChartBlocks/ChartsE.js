import React from 'react';

import ReactEcharts from 'echarts-for-react';
import Grid from '@material-ui/core/Grid';
import './home.css';

var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [ Math.random() * 300 ];

for (var i = 1; i < 20000; i++) {
	var now = new Date((base += oneDay));

	data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
const option2 = {
	title: {
		text: 'Beijing AQI'
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		data: data
	},
	yAxis: {
		splitLine: {
			show: false
		}
	},
	toolbox: {
		left: 'center',
		feature: {
			dataZoom: {
				yAxisIndex: 'none'
			},
			restore: {},
			saveAsImage: {}
		}
	},
	dataZoom: [
		{
			startValue: '2014-06-01'
		},
		{
			type: 'inside'
		}
	],
	visualMap: {
		top: 10,
		right: 10,
		pieces: [
			{
				gt: 0,
				lte: 50,
				color: '#096'
			},
			{
				gt: 50,
				lte: 100,
				color: '#ffde33'
			},
			{
				gt: 100,
				lte: 150,
				color: '#ff9933'
			},
			{
				gt: 150,
				lte: 200,
				color: '#cc0033'
			},
			{
				gt: 200,
				lte: 300,
				color: '#660099'
			},
			{
				gt: 300,
				color: '#7e0023'
			}
		],
		outOfRange: {
			color: '#999'
		}
	},
	series: {
		name: 'Beijing AQI',
		type: 'line',
		data: data,
		markLine: {
			silent: true,
			data: [
				{
					yAxis: 50
				},
				{
					yAxis: 100
				},
				{
					yAxis: 150
				},
				{
					yAxis: 200
				},
				{
					yAxis: 300
				}
			]
		}
	}
};
export const ChartsE = () => {
	return (
		<Grid container>
			<Grid item lg={1} md={1} xl={2} xs={2}>
				<div>
					<div className='container' />
				</div>
			</Grid>
		</Grid>
	);
};

export default ChartsE;
