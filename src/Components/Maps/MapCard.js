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

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<AreaCharts />
				<Typography variant='body2' color='textSecondary' component='p'>
					<div>Kamati Hasheela</div>
					<div>Meter Number:12323234234234</div>
				</Typography>
			</CardContent>

			<CardActions>
				<Button size='small' color='primary'>
					Meter Profile
				</Button>
				<Button size='small' color='primary'>
					Grid Profile
				</Button>
			</CardActions>
		</Card>
	);
}
