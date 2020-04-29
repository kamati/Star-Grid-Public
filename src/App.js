import React from 'react';
import { Layout, Navigation, Content, Drawer, Header } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Components/main';
import Dashboard from './Components/MeterOverView/Dashboard';
import { Router, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='demo-big-content'>
			<Layout>
				<Header title='Star GridX' scroll>
					<Navigation>
						<Link to='/MapDash/2'>Home </Link>
						<Link to='/gridTopology'>Grid Topology</Link>
						<Link to='/alarms'>Alarms</Link>
						<Link to='/Home'>New Meter</Link>
						<Link to='/systemSetting'>System Settings</Link>
					</Navigation>
				</Header>
				<Content shadow={15} style={{ margin: '12px', marginBottom: '30px' }}>
					<div className='page-content' />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
