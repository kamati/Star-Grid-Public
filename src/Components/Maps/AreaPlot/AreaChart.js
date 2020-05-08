import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Divider, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './Chart';

const useStyles = makeStyles(() => ({
	root: {},
	chartContainer: {
		height: 160,
		width: 360,
		position: 'relative'
	},
	actions: {
		justifyContent: 'flex-end'
	}
}));

const AreaChart = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<h6> Meter Weekly Power Consuption </h6>
			<Divider />
			<CardContent>
				<div className={classes.chartContainer}>
					<Bar data={data} options={options} />
				</div>
			</CardContent>
			<Divider />
		</div>
	);
};

export default AreaChart;
