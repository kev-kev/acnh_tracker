import React, { Component } from 'react'
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { fetchVisitors } from '../actions/visitorActions'
import { saveLog } from '../actions/logActions'
import VisitorBox from '../components/VisitorBox'
import { connect } from 'react-redux'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        KevKev Productions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  visitorGrid: {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center'
 },
 visitorBox: {
   width: 205
 },
 date: {
   margin: '10px',
 },
 selectedDate: {
   'text-align': 'center'
 },
 dateLabel: {
   padding: '10px'
 }
});

export class LogForm extends Component {
  // classes = useStyles();

  state = {
    date: "",
    selectedVisitors: [],
    open: false,
  }

  componentDidMount(){
    this.props.fetchVisitors()
    this.setState({
      date: new Date().toISOString().substr(0,10)
    })
  }

  renderVisitorHeaders = (classes) => {
    if (this.props.visitors){
      return this.props.visitors.map(visitor => {
        return (
          <Grid item xs={3} className={classes.visitorGrid}>
            <Paper variant="outlined" className={classes.visitorBox}>
              <VisitorBox key={visitor.name} visitor={visitor} handleOnChange={this.handleOnChange} displayCheckbox={true} />
            </Paper>
          </Grid>
        )
      })
    }
  }

  handleOnChange = (e) => {
    let targetVisitor = e.target.id
    if (e.target.checked){
      this.setState({
        selectedVisitors: [...this.state.selectedVisitors, targetVisitor]
      })
    } else {
      let visitorsArr = this.state.selectedVisitors
      let idx = visitorsArr.findIndex(visitor => visitor === targetVisitor)
      let newVisitors = [...this.state.selectedVisitors.slice(0, idx), ...this.state.selectedVisitors.slice(idx + 1)]
      this.setState({
        selectedVisitors: newVisitors
      })
    }
  }

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  getWeekday = () => {
    let d = new Date(this.state.date)
    let weekday = new Array(7)
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    return weekday[d.getDay()]
  }

  saveLog = () => {
    this.props.saveLog(this.state.date, this.state.selectedVisitors)
  }

  render(){
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const handleDrawerOpen = () => {
      this.setState({
        open: true
      })
    };
  
    const handleDrawerClose = () => {
      this.setState({
        open: false
      })
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Island Tracker
            </Typography>

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button>
            <ListItemIcon onClick={this.props.handleLogOut}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={11}>
                <Paper>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.selectedDate}>
                 {this.getWeekday()}
                </Typography>
                  <label htmlFor="date" className={classes.dateLabel}>Select Date</label><br />
                  <input type="date" value={this.state.date} className={classes.date} min="2020-03-20" onChange={this.handleDateChange}/>
                  <Grid container spacing={1} className={classes.visitorGrid}>
                    {this.renderVisitorHeaders(classes)} 
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <button onClick={this.saveLog}> Save Log </button>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  visitors: state.visitorReducer.visitors,
  selectedLog: state.logReducer.selectedLog
})

const mapDispatchToProps = (dispatch) => ({
  saveLog: (date, visitors) => dispatch(saveLog(date, visitors)),
  fetchVisitors: () => dispatch(fetchVisitors())
})

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(LogForm))
