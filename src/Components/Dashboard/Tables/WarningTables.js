import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardHeader, Divider, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const columns = [
	{ id: 'name', label: 'Meter Number', minWidth: 170 },
	{ id: 'code', label: 'Alarm Type', minWidth: 100 },
	{
		id: 'population',
		label: 'Time',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US')
	},
	{
		id: 'size',
		label: 'Time',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US')
	},
	
];

function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population };
}

const rows = [
	createData('20206KPI41103T7k', 'Warning', "10:30"),
	createData('20200W8XC19DAI7k', 'Error', "12:14"),
	createData('2020U49AHXUEF27k', 'Failure ', "00.00"),
	createData('202027G0DZGSAS7', 'Error', "3:00"),
	createData('2020BQ71Z7JT8Z7k', 'Failure', "3:30"),
	createData('2020QGBG1A9KNP7', 'Warning', "5:00"),
	createData('2020J0B6VIKYIL7k', 'Warning', "5:30"),
	createData('20202FT62VHNON7k', 'Warning', "5:14"),
	createData('2020X57HWX4B7R7', 'Error', "6:13"),
	createData('2020NFD9MKZEV07', 'Error', "6:25"),
	createData('2020GAJQFE5WFU7k', 'Error', "7:05"),
	createData('2020QGBG1A9KNP7', 'Error', "8:16"),
	createData('2020QGBG1A9KNP7', 'Error', "9:46"),
	createData('2020QGBG1A9KNP7', 'Error', "10:36"),
	createData('2020QGBG1A9KNP7', 'Error', "14:59")
];

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		height: 487,
		position: 'relative'
	}
});

export default function WarningTables() {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Card>
			<TableContainer className={classes.container}>
				<CardHeader
					action={
						<Button size='small' variant='text'>
							Last 7 days <ArrowDropDownIcon />
						</Button>
					}
					title='Meter Notifications'
				/>
				<Divider />
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
							return (
								<TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === 'number' ? (
													column.format(value)
												) : (
													value
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[ 10, 25, 100 ]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Card>
	);
}
