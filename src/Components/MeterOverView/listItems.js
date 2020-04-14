import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary=' Data Overview' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<Link to={{ pathname: `/PropertiesManager/Livechart` }}>Historic Data</Link>
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary='Transaction history ' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary='Controls ' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary='Integrations' />
		</ListItem>
	</div>
);
