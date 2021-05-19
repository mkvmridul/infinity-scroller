import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
	
  },
  avatar: {
	  width: '10% ' 
  },
  listItem:{
		boxShadow: "1px 1px 6px #999",
		marginBottom: "3px"
  }
}));



const ContactComponent = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button className={classes.listItem}>
					<img src={props.data.image} alt="avatar" className={classes.avatar}/>
					&nbsp;
					&nbsp;
					&nbsp;
				<ListItemText primary={props.data.name} secondary={props.data.email}/>
				</ListItem>
			</List>
			</div>
	);
}

export default ContactComponent;