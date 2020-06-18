import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { fetchUser, userLoginFailed } from '../actions/userActions'
import { Redirect } from 'react-router'
import { Alert, AlertTitle } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        KevDev Productions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: '50px', 
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginFormPaper: {
    width: '100%',
    margin: '50px',
    padding: '20px'
  }
});

class LoginForm extends Component {  

  state = {
    username: "",
    password: ""
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.fetchUser(this.state)
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    const { classes } = this.props

    const displayAlert = () => {
      if(this.props.loginFailed === true){
        return (
          <div className={classes.root}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Invalid username or password
            </Alert>     
          </div> 
        )
      }
    }

    const handleForgotPassword = () => {
      return (
        <div className={classes.root}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Invalid username or password
          </Alert>     
        </div> 
      )
    }

    if (!this.props.successfulLogin) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.loginFormPaper}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
              My Island Tracker
          </Typography>
          <img src={require('../assets/images/leaf.png')} alt="leaf" height="100"/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2" onClick={() => handleForgotPassword()}>
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {displayAlert()}
        <Box mt={8}>
          <Copyright />
        </Box>
        </Paper>
      </Container>
      );} else {
        return (
        <Redirect to={`/${this.state.username}`}/>
        )
      }
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser({auth: userInfo})),
  }
}

const mapStateToProps = (state) => {
  return {
    successfulLogin: state.userReducer.loggedIn,
    loginFailed: state.userReducer.loginFailed
  };
}

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(LoginForm))