import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
  root: {
      display: 'flex',
      'flex-direction': 'column',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    },
  avatar: {
    'margin-right': theme.spacing(1)
  },
  listItem: {
    'list-style': 'none'
  }
  };
});

const VisitorBox = (props) => {
  const classes = useStyles();

  return (
    // <div>
    //   <Avatar src={props.visitor.img} alt={props.visitor.name} className={classes.large}/><br />
    //   <label>{props.visitor.name}</label><br />
    // </div>
    <List>
    <ListItem key={props.visitor.name} className={classes.listItem}>
      <ListItemAvatar className={classes.avatar}>
        <Avatar src={props.visitor.img} alt={props.visitor.name} className={classes.large}/>
      </ListItemAvatar>
      <ListItemText id={props.visitor.name} primary={props.visitor.name} />
      {props.displayCheckbox ? 
        <ListItemSecondaryAction>
          <input type="checkbox" id={props.visitor.name} onChange={props.handleOnChange}/>
        </ListItemSecondaryAction>
        :
        null
      }
      </ListItem>
      </List>


  )
}

export default VisitorBox
