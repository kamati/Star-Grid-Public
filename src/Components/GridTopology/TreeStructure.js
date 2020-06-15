import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
	root: {
		height: 240,
		flexGrow: 1,
		maxWidth: 400
	}
});

export default function TreeStructure() {
	const classes = useStyles();

	return (
		<TreeView
			className={classes.root}
			defaultCollapseIcon={<ExpandMoreIcon />}
			defaultExpandIcon={<ChevronRightIcon />}>
			<TreeItem nodeId='1' label='Robert Mugabe Avenue'>
				<TreeItem nodeId='2' label='2020GAJQFE5WFU7k' />
				<TreeItem nodeId='3' label='2020CBF4Z4P8Y97k' />
				<TreeItem nodeId='4' label='2020WGRDIV1TFC7k' />
				<TreeItem nodeId='3' label='2020KOLU56LMS97k' />
				<TreeItem nodeId='4' label='202027G0DZGSAS7k' />
			</TreeItem>
			<TreeItem nodeId='5' label='Frankie Fredericks Drive'>
				<TreeItem nodeId='6' label='2020GAJQFE5WFU7k' />
				<TreeItem nodeId='7' label='202027G0DZGSAS7k' />
				<TreeItem nodeId='8' label='2020LWY0VCMH6U7k' />
				<TreeItem nodeId='9' label='20206MI34R58E77k' />
				<TreeItem nodeId='10' label='2020BQ71Z7JT8Z7k' />
			</TreeItem>
			<TreeItem nodeId='11' label='Michelle Mclean Street'>
				<TreeItem nodeId='12' label='2020GAJQFE5WFU7k' />
				<TreeItem nodeId='13' label='202027G0DZGSAS7k' />
				<TreeItem nodeId='14' label='2020LWY0VCMH6U7k' />
				<TreeItem nodeId='15' label='20206MI34R58E77k' />
				<TreeItem nodeId='16' label='2020BQ71Z7JT8Z7k' />
			</TreeItem>
		</TreeView>
	);
}
