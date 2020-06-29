import React from 'react';

import ReactEcharts from 'echarts-for-react';
import Grid from '@material-ui/core/Grid';
import './home.css';

var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [ Math.random() * 300 ];

for (var i = 1; i < 20000; i++) {
	data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
function get(data) {}
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
