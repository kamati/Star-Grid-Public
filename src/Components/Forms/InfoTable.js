import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const row = (x, i, header) => (
	<TableRow key={`tr-${i}`}>{header.map((y, k) => <TableCell key={`trc-${k}`}>{x[y.prop]}</TableCell>)}</TableRow>
);

export default function InfoTable({ data, header }) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>{header.map((x, i) => <TableCell key={`thc-${i}`}>{x.name}</TableCell>)}</TableRow>
				</TableHead>
				<TableBody>{data.map((x, i) => row(x, i, header))}</TableBody>
			</Table>
		</TableContainer>
	);
}
