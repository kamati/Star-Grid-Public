import React from 'react';

export default function DataBaseUpdate() {
	const [ meterData, setMeterdata ] = useState(null);
	useEffect(() => {
		console.log('We are using effect');
		async function fetchData() {
			var resquestType = {
				key: 'StartGRID2020',
				SQLQuery: `SELECT * FROM  UserDetails where MeterNumber='${props.selectedMeter.meter.meterNumber}'`
			};
			const request = new Request(`https://stargridx.net/GetUserProfile.php`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(resquestType)
			});
			const api_call = await fetch(request);
			const data = await api_call.json();
			setMeterdata(data);
		}
		fetchData();
	}, []);
	return <div />;
}
