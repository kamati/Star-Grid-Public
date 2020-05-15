import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
	{ name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
	{ name: 'Product 2', desc: 'Another thing', price: '$3.45' },
	{ name: 'Product 3', desc: 'Something else', price: '$6.51' },
	{ name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
	{ name: 'Shipping', desc: '', price: 'Free' }
];
const addresses = [ '1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA' ];
const payments = [
	{ name: 'Card type', detail: 'Visa' },
	{ name: 'Card holder', detail: 'Mr John Smith' },
	{ name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
	{ name: 'Expiry date', detail: '04/2024' }
];

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0)
	},
	total: {
		fontWeight: 700
	},
	title: {
		marginTop: theme.spacing(2)
	}
}));

export default function InfromationReview(props) {
	const classes = useStyles();
	console.log(props.MeterUser);
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Meter Data summary
			</Typography>
			<List disablePadding>
				<ListItem className={classes.listItem}>
					<ListItemText primary='First Name' secondary={props.MeterUser.firstName} />
					<Typography variant='body2'>{props.MeterUser.FirstName} </Typography>
				</ListItem>

				<ListItem className={classes.listItem}>
					<ListItemText primary='Last name' secondary={props.MeterUser.LastName} />
					<Typography variant='body2'>{props.MeterUser.LastName}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='Region' secondary={props.MeterUser.Region} />
					<Typography variant='body2'>{props.MeterUser.Region}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='City' secondary={props.MeterUser.City} />
					<Typography variant='body2'>{props.MeterUser.City}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='Constituency' secondary={props.MeterUser.Constituency} />
					<Typography variant='body2'>{props.MeterUser.Constituency}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='Street Name' secondary={props.MeterUser.StreetName} />
					<Typography variant='body2'>{props.MeterUser.StreetName}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='Meter Phone Number' secondary={props.MeterUser.MeterNumber} />
					<Typography variant='body2'>{props.MeterUser.MeterNumber}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='Meter Phone Number' secondary={props.MeterUser.MeterPhoneNumber} />
					<Typography variant='body2'>{props.MeterUser.MeterPhoneNumber}</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary='User Category' secondary={props.MeterUser.MeterPhoneNumber} /> />
					<Typography variant='body2'>{props.MeterUser.MeterPhoneNumber}</Typography>
				</ListItem>
			</List>
		</React.Fragment>
	);
}
