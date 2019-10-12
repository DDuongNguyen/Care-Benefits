import React, { Component } from 'react';

class DayCare extends Component {

  render() {
    return (
      <div className="day-care">
      <h1>Name: {this.props.data.name}</h1>
      <h1>Description: {this.props.data.description}</h1>
      <h1>Rating: {this.props.data.rating}/5</h1>
      <h1>Cost: {this.props.data.cost}</h1>

      </div>
    );
  }

}

export default DayCare;
