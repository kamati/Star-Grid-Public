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
			<Link to='/SystemSetting/ProfileInfo'>Profile Information</Link>
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<Link to='/SystemSetting/Password'>Password Change </Link>
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<Link to='/SystemSetting/UserManagment'>User Management </Link>
		</ListItem>
	</div>
);
