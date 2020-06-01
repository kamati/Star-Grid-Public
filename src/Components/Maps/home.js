import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, Polyline } from 'react-google-maps';
import * as parkData from '../../Data/skateboard-parks.json';
import mapStyles from '../../Data/mapStyles';
import GeolocationData from '../GeolocationData';
import GridTopology from '../gridTopology';
import MapCard from './MapCard';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactEcharts from 'echarts-for-react';  
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import Tree, { TreeNode } from 'rc-tree';
import './home.css';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	content: {
		flexGrow: 1,
		height: 440,
		overflow: 'auto',
		paddingTop: theme.spacing(2)
	}
}));

const useFetch = (url) => {
	const [ meterData, setMeterdata ] = useState(null);
	console.log('data.Server_response');
	useEffect(() => {
		async function fetchData() {
			var resquestType = {
				key: 'StartGRID2020',
				SQLQuery: `SELECT * FROM  MeterLocation`
			};
			const request = new Request(`https://stargridx.net/MeterGeolocation.php`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(resquestType)
			});
			const api_call = await fetch(request);
			const data = await api_call.json();
			setMeterdata(data.Server_response);

			console.log(data.Server_response);
		}
		fetchData();
	}, []);

	return { meterData };
};

function Map() {
	const [ selectedMeter, setSelectedMeter ] = useState(null);
	const url = 'https://cors-anywhere.herokuapp.com/https://stargridx.net/MeterGeolocation.php';
	const { meterData } = useFetch(url);

	return (
		<GoogleMap
			defaultZoom={15}
			defaultCenter={{ lat: -22.560282, lng: 17.069457 }}
			defaultOptions={{
				scrollwheel: true,
				zoomControl: true,

				styles: [
					{
						featureType: 'water',
						stylers: [ { saturation: 43 }, { lightness: -11 }, { hue: '#0088ff' } ]
					},
					{
						featureType: 'road',
						elementType: 'geometry.fill',
						stylers: [ { hue: '#ff0000' }, { saturation: -100 }, { lightness: 99 } ]
					},
					{
						featureType: 'road',
						elementType: 'geometry.stroke',
						stylers: [ { color: '#808080' }, { lightness: 54 } ]
					},
					{
						featureType: 'landscape.man_made',
						elementType: 'geometry.fill',
						stylers: [ { color: '#ece2d9' } ]
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry.fill',
						stylers: [ { color: '#ccdca1' } ]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [ { color: '#767676' } ]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.stroke',
						stylers: [ { color: '#ffffff' } ]
					},
					{ featureType: 'poi', stylers: [ { visibility: 'off' } ] },
					{
						featureType: 'landscape.natural',
						elementType: 'geometry.fill',
						stylers: [ { visibility: 'on' }, { color: '#b8cb93' } ]
					},
					{ featureType: 'poi.park', stylers: [ { visibility: 'on' } ] },
					{
						featureType: 'poi.sports_complex',
						stylers: [ { visibility: 'on' } ]
					},
					{ featureType: 'poi.medical', stylers: [ { visibility: 'on' } ] },
					{
						featureType: 'poi.business',
						stylers: [ { visibility: 'simplified' } ]
					}
				]
			}}>
			{meterData != null &&
				meterData.map((meter) => {
					console.log('home status3', meter.status);
					if (parseInt(meter.Status) == 1) {
						return (
							<div>
								<Polyline
									path={[
										{ lat: parseFloat(meter.Longitude), lng: parseFloat(meter.Lat) },
										{ lat: parseFloat(meter.pLat), lng: parseFloat(meter.pLng) }
									]}
									geodesic={true}
									options={{
										strokeColor: '#ff2527',
										strokeOpacity: 0.75,
										strokeWeight: 2
									}}
								/>
								<Marker
									key={meter.lng}
									position={{ lat: parseFloat(meter.Longitude), lng: parseFloat(meter.Lat) }}
									onClick={() => {
										setSelectedMeter(meter);
									}}
									icon={{
										url: require('./map_icon_red.png'),
										scaledSize: new window.google.maps.Size(20, 20)
									}}
								/>
							</div>
						);
					} else {
						return (
							<div>
								<Polyline
									path={[
										{ lat: parseFloat(meter.Longitude), lng: parseFloat(meter.Lat) },
										{ lat: parseFloat(meter.pLat), lng: parseFloat(meter.pLng) }
									]}
									geodesic={true}
									options={{
										strokeColor: '#ff2527',
										strokeOpacity: 0.75,
										strokeWeight: 2
									}}
								/>
								<Marker
									key={meter.lng}
									position={{ lat: parseFloat(meter.Longitude), lng: parseFloat(meter.Lat) }}
									onClick={() => {
										setSelectedMeter(meter);
									}}
									icon={{
										url: require('./map_icon_green.png'),
										scaledSize: new window.google.maps.Size(20, 20)
									}}
								/>
							</div>
						);
					}
				})}
			{selectedMeter && (
				<InfoWindow
					position={{ lat: parseFloat(selectedMeter.Longitude), lng: parseFloat(selectedMeter.Lat) }}
					onCloseClick={() => {
						setSelectedMeter(null);
					}}>
					<MapCard MeterProfile={selectedMeter} />
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const treeData = [
	{
	  key: '0-0',
	  title: 'parent 1',
	  children: [
		{ key: '0-0-0', title: 'parent 1-1', children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }] },
		{
		  key: '0-0-1',
		  title: 'parent 1-2',
		  children: [
			{ key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
			{ key: '0-0-1-1', title: 'parent 1-2-1' },
			{ key: '0-0-1-2', title: 'parent 1-2-2' },
			{ key: '0-0-1-3', title: 'parent 1-2-3' },
			{ key: '0-0-1-4', title: 'parent 1-2-4' },
			{ key: '0-0-1-5', title: 'parent 1-2-5' },
			{ key: '0-0-1-6', title: 'parent 1-2-6' },
			{ key: '0-0-1-7', title: 'parent 1-2-7' },
			{ key: '0-0-1-8', title: 'parent 1-2-8' },
			{ key: '0-0-1-9', title: 'parent 1-2-9' },
			{ key: 1128, title: 1128 },
		  ],
		},
	  ],
	},
  ];

const Home = () => {

	const  keyReplace = (obj, keyToReplace, valueToReplaceWith) => {
		let str = JSON.stringify(obj);
		str = str.replace(/"title"/g, '"name"');
		return JSON.parse(str);
	};
	  

	return (
		<div>
			<div className="container">
				<ReactEcharts className="echarts"
					option={{
						tooltip: {
							trigger: 'item',
							triggerOn: 'mousemove'
						},
						legend: {
							top: '2%',
							left: '3%',
							orient: 'vertical',
							data: [{
								name: 'sample tree',
								icon: 'circle'
							}],
							borderColor: '#c23531'
						},
						series:[
							{
								type: 'tree',

								name: 'sample tree',

								data: keyReplace(treeData, "title", "name"),

								top: '5%',
								left: '10%',
								bottom: '2%',
								right: '60%',

								symbolSize: 7,

								label: {
									position: 'left',
									verticalAlign: 'middle',
									align: 'right'
								},

								leaves: {
									label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left'
									}
								},

								expandAndCollapse: true,

								animationDuration: 550,
								animationDurationUpdate: 750

							},
						]
					}}
					notMerge={true}
					lazyUpdate={true}
					theme={"theme_name"}
					opts={
						{
						
						}

					} 
				/>
			</div>
		</div>
	);
};

export default Home;