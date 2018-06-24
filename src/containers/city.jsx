import React, { Component } from 'react';


class City extends Component {
  render() {
    return (
    <div className="active-city">
      <h3>{this.props.city.name}</h3>
      <p>{this.props.city.address}</p>
    </div>
    );
  };
}


export default City;
