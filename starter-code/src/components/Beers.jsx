import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { NavLink } from "react-router-dom";

export default class Beers extends Component {
  state = {
    beers: [],
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(this.state.APIEndpoint)
      .then(apiRes => this.setState({ beers: apiRes.data }))
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    return this.state.beers.length ? (
      <div>
        <Header></Header>
        <h1 className="title">all beers</h1>
        {this.state.beers.map((b, i) => (
          <div key={i}>
            <img src={b.image_url} alt="beer-image" />
            <div>{b.name}</div>
            <div>{b.tagline}</div>
            <div>{b.contributed_by}</div>
            <div>
              <NavLink exact to={`/beers/${b._id}`}>
                detailled beer
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>no beers yet...</p>
    );
  }
}
