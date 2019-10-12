import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../assets/logo.png'
import '../css/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, search } from '@fortawesome/free-solid-svg-icons'
import DayCare from '../day-care/day-care.js'
import { connect } from "react-redux";

class Main extends Component {

  redirectMainPage = () =>{
    this.props.history.push('/getwell')
  }

  renderDayCare = () => {
    if (this.props.daycares.length > 0){
      // debugger
    return this.props.daycares.map(daycare => {
      return <DayCare data= {daycare}/>
    })
    // return (<DayCare>)
  }
  }

  render() {
    return (
      <div>

      <div class="vertical-nav bg-white" id="sidebar">
  <div class="logo">
  </div>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic bg-light">
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                Home
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                About
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Profile
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                Sign Out
            </a>
    </li>
  </ul>

</div>


<div class="page-content p-5" id="content">



  <h2 class="display-4 text-39536A" id='special'>GET WELL DAY CARE</h2>
  <p class="lead text-39536A mb-0" id ='sub-special'>We Connect You To A Sick Day Care.</p>


  <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div class="input-group">
            <input id= 'address-input'type="search" placeholder="Enter Your Address?" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
            <div class="input-group-append">
            <FontAwesomeIcon icon="fas fa-search" />
            </div>
          </div>
        </div>
        <div class="filter-nav">
    <button class="btn btn-success active" data-filter="">All</button>
    <button class="btn btn-primary" data-filter="nature">Registered Nurse</button>
    <button class="btn btn-primary" data-filter="food">Rating</button>
    <button class="btn btn-primary" data-filter="architecture">Cost</button>
      </div>

  <div class="separator"></div>
  <div class="row text-white">
  {this.renderDayCare()}
  </div>
  <img src = 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' alt ='no' id='map'/>

</div>
</div>
    );
  }

}

const mapStateToProps = state =>
  ({
    daycares: state.dayCareReducer.daycares
  })


const mapDispatchToProps = {
  // signIn: userActions.signIn
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
