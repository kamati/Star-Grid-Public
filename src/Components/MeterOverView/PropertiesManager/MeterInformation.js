import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},

	pos: {
		marginBottom: 12
	}
});

export default function MeterInfromation(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<Typography variant='h5' component='h4'>
				Meter Information
			</Typography>
			<Divider />
			<CardContent>
				<Grid container spacing={1}>
					<Grid lg={3} sm={6} xl={3} xs={12}>
						<Typography variant='h8' component='h8'>
							User Name
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							Kamati hasheela
						</Typography>
						<Typography variant='h8' component='h8'>
							Meter Number
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							15452154545145
						</Typography>
					</Grid>

					<Grid lg={2} sm={6} xl={2} xs={12}>
						<Typography variant='h8' component='h8'>
							Region
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							Khomas
						</Typography>
						<Typography variant='h8' component='h8'>
							City
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							Windhoek
						</Typography>
						<Typography variant='h8' component='h8'>
							Constituency
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							Windhoek West
						</Typography>
					</Grid>
					<Grid lg={2} sm={6} xl={2} xs={12}>
						<Typography variant='h8' component='h8'>
							Street Name
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							Simposon
						</Typography>

						<Typography variant='h8' component='h8'>
							Erf Number
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							12
						</Typography>
					</Grid>
					<Grid lg={3} sm={6} xl={3} xs={12}>
						<Typography variant='h8' component='h8'>
							Meter Phone Number
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							0814675538
						</Typography>
						<Typography variant='h8' component='h8'>
							Cell Phone Number
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							08146733589
						</Typography>
					</Grid>
					<Grid lg={2} sm={6} xl={2} xs={12}>
						<Typography variant='h8' component='h8'>
							User Category
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							Residential
						</Typography>

						<Typography variant='h8' component='h8'>
							Install Date
						</Typography>
						<Typography className={classes.title} color='textSecondary' gutterBottom>
							4/20/2019
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<Divider className={classes.pos} />
			<CardActions>
				<Button size='small'>Edit Meter Information</Button>
			</CardActions>
		</Card>
	);
}
