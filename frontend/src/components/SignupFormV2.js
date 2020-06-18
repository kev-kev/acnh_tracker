import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signUserUp } from '../actions/userActions'
import { Alert, AlertTitle } from '@material-ui/lab';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         KevKev Productions
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignupForm extends Component {

  state = {
    username: "",
    password: "",
    password_confirmation: "",
    island_name: "",
    profile_pic: ""
  }

  handleOnChange = (e) => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.signUserUp(this.state)
  }

  render() {
    const { classes } = this.props

    const displayAlert = () => {
      if(this.props.signedUp){
        return(
          <div className={classes.root}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Account successfully created
          </Alert>     
        </div> 
        )
      } else if(this.props.signedUp === false) {
          return(
          <div className={classes.root}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Invalid username or password
            </Alert>     
          </div> 
          )
        }

    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={require('../assets/images/leaf.png')} alt="leaf" height="100"/>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={this.state.username} 
                  onChange={this.handleOnChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="islandName"
                  label="Island Name"
                  name="island_name"
                  value={this.state.island_name} 
                  onChange={this.handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  value={this.state.password} 
                  onChange={this.handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  value={this.state.passwordConfirmation} 
                  onChange={this.handleOnChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link> <br />
              </Grid>
            </Grid>
          </form>
        </div>
        {displayAlert()}
        {/* <Box mt={5}>
          <Copyright />
        </Box> */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signedUp: state.userReducer.signedUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(SignupForm))