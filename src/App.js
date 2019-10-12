import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import daycareAction from './actions/daycareActions.js'
import appointmentActions from './actions/appointmentActions.js'
import Routes from "./Routes.js";
// import {connect} from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  componentDidMount(){
    this.props.loadDayCare()
    this.props.loadAppointment()
  }

  render(){
  return(
    <div className="App">
    <Router>
      <Routes/>
    </Router>
    </div>
  );
}
}

const mapDispatchToProps = {
  loadDayCare: daycareAction.loadDayCare,
  loadAppointment: appointmentActions.loadAppointment
}

// const mapStateToProps = state => ({
//   daycares:state.dayCareReducer.daycares
// })


export default connect(null,mapDispatchToProps)(App);
