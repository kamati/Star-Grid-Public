import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AreaCharts from './AreaPlot/AreaChart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 545
	},
	media: {
		height: 140
	}
});

export default function MediaCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent className={classes.root}>
				<AreaCharts />
				<Typography variant='body2' color='textSecondary' component='p'>
					<div>Meter Number: {props.MeterProfile.meterNumber}</div>
					<div> User Name: Kamati Hasheela</div>
				</Typography>
			</CardContent>

			<CardActions>
				<Button size='small' color='primary'>
					<Link
						to={{
							pathname: `/MeterProps/${props.MeterProfile.meterNumber}`,
							state: { meter: props.MeterProfile }
						}}>
						Meter Profile
					</Link>
				</Button>
				<Button size='small' color='primary'>
					Grid Profile
				</Button>
			</CardActions>
		</Card>
	);
}
