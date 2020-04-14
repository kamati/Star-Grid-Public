import React from 'react';
import {
	DataTable,
	TableHeader,
	Card,
	IconButton,
	CardActions,
	CardText,
	CardTitle,
	CardMenu,
	Button
} from 'react-mdl';
import Grid from '@material-ui/core/Grid';
import Image from '../Data/Capture_burned.jpg'; // Import using relative path
import { Link } from 'react-router-dom';
const MeterGrid = (props) => (
	<div>
		{props.meters ? (
			<div>
				<Grid container spacing={10} style={styles.heroContainer} justify='center'>
					{props.meters.map((meterInfo) => {
						return (
							<Card
								key={meterInfo.ID}
								shadow={1}
								style={{ width: '314px', margin: '12px', marginBottom: '30px' }}>
								<CardTitle
									style={{
										color: '#fff',
										height: '236px',
										background: 'url(./Capture_burned.svg)  center / cover'
									}}>
									Welcome
								</CardTitle>
								<CardText>
									<DataTable
										style={{ width: '22px', margin: '2px', marginBottom: '10px' }}
										selectable
										shadow={0}
										rowKeyColumn='id'
										rows={[
											{
												id: 1001,
												Parameter: 'Voltage',
												Value: meterInfo.VoltageRMS,
												Time: '12:00'
											},
											{
												id: 1002,
												Parameter: 'Current',
												Value: meterInfo.CurrentRMS,
												Time: '12:00'
											},
											{
												id: 1003,
												Parameter: 'Active Power',
												Value: meterInfo.ActivePower,
												Time: '12:00'
											}
										]}>
										<TableHeader name='Parameter' tooltip='System prameterName'>
											Parameter
										</TableHeader>
										<TableHeader numeric name='Value' tooltip='value of parameter'>
											Value{' '}
										</TableHeader>
										<TableHeader numeric name='Time' tooltip='time of recived'>
											Time
										</TableHeader>
									</DataTable>
								</CardText>
								<CardActions border>
									<Button colored>
										<Link
											to={{
												pathname: `/MeterProps/${meterInfo.meterNumber}`,
												state: { meter: meterInfo.meterNumber }
											}}>
											Meter Profile
										</Link>
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name='share' />
								</CardMenu>
							</Card>
						);
					})}
				</Grid>
			</div>
		) : (
			'No meters in the data'
		)}
	</div>
);
const styles = {
	heroContainer: {
		height: 800,
		backgroundImage: `url(${"./Capture_burned.png'"})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: `calc(100vw + 48px)`,
		margin: -24,
		padding: 24
	}
};
export default MeterGrid;
