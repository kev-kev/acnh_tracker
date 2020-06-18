import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import Root from './components/Root'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'fontsource-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  ))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a',
    },
    secondary: {
      main: '#69f0ae',
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(https://acnh-tracker-imgs.s3.amazonaws.com/background.png)"
        }
      }
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root store={store}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
