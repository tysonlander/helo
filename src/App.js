import React from 'react';
import './App.css';
import router from './routes'
import Nav from './Components/Nav/Nav'
import {withRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'


function App(props) {
  console.log(props)
  return (
    <>
      <Provider store={store}>
        {props.location.pathname === "/" ?
        (<></>) : (<><Nav/></>)
        }
        {router}
      </Provider>

    </>
  );
}

export default withRouter(App);
