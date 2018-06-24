import React, { Component } from 'react';


class City extends Component {
  render() {

    const url = "https://kitt.lewagon.com/placeholder/cities/paris";

    return (
    <div className="active-city">
      <h3>{this.props.city.name}</h3>
      <p>{this.props.city.address}</p>
      <img src={url} width="100%" />
    </div>
    );
  };
}


export default City;
