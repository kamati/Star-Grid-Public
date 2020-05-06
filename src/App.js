import React from 'react';
import { Layout, Navigation, Content, Drawer, Header, Textfield, HeaderRow } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Components/main';
import Dashboard from './Components/MeterOverView/Dashboard';
import { Router, Route } from 'react-router-dom';
import './App.css';
import img from './Data/Logo.png';
import img2 from './Data/Logo_burned.png';

function App() {
	return (
		<div className='demo-big-content'>
			<Layout>
				<Header title='Star GridX' background='Red' scroll waterfall hideTop>
					<HeaderRow title='Star GridX' className='header-color' />
					<HeaderRow className='header-color'>
						<img src={img2} className='photo' />
						<Navigation>
							<Link to='/MapDash/2'>Home </Link>
							<Link to='/gridTopology'>Grid Topology</Link>
							<Link to='/alarms'>Alarms</Link>
							<Link to='/FormMeter'>New Meter</Link>
							<Link to='/systemSetting'>System Settings</Link>
						</Navigation>
					</HeaderRow>
				</Header>
				<Content>
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
