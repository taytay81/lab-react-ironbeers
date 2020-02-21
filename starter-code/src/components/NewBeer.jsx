import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class NewBeer extends Component {
  state = {
    beer: {}
  };

  onSubmit() {}

  handleInputChange = event => {
    console.log("try to change the contributed_by ", event.target.value);
    console.log("try to change the contributed_by ", event.target.name);
    console.log(this.state.beer);
    let beer = { ...this.state.beer };
    beer[event.target.name] = event.target.value;
    this.setState({ beer });
  };
  populateTheBeer = event => {
    event.preventDefault();
    console.log("the beer", this.state.beer);
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state.beer)
      .then(apiRes => console.log(apiRes))
      .catch(apiErr => console.error(apiErr));
  };
  render() {
    return (
      <div>
        <Header></Header>

        <form onSubmit={this.populateTheBeer}>
          <label htmlFor="">name</label>
          <input type="text" name="name" onChange={this.handleInputChange} />
          <label htmlFor="">tagline</label>
          <input type="text" name="tagline" onChange={this.handleInputChange} />
          <label htmlFor="">description</label>
          <input
            type="text"
            name="description"
            onChange={this.handleInputChange}
          />
          <label htmlFor="">first_brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleInputChange}
          />
          <label htmlFor="">brewers_tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleInputChange}
          />
          <label htmlFor="">attenuation_level</label>
          <input
            type="number"
            name="attenuation_level"
            onChange={this.handleInputChange}
          />
          <label htmlFor="">contributed_by</label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleInputChange}
          />
          <button> Add a Beer </button>
        </form>
      </div>
    );
  }
}
