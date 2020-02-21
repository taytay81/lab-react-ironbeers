import React, { Component } from "react";

import Header from "./Header";
import PrintBeer from "./PrintBeer";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(apiRes => this.setState({ beer: apiRes.data }))
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    const beer = this.state.beer;
    console.log(beer);
    // YOU CAN PERFOM THE DEBUG LOGS HERE OR IN THE REACT DEVTOOLS CONSOLE

    return beer ? (
      <>
        <Header></Header>
        <h1>Random beer</h1>
        <PrintBeer
          name={beer.name}
          image_url={beer.image_url}
          tagline={beer.tagline}
          first_brewed={beer.first_brewed}
          attenuation_level={beer.attenuation_level}
          description={beer.description}
          contributed_by={beer.contributed_by}
        ></PrintBeer>
      </>
    ) : (
      <p>... loading</p>
    );
  }
}
