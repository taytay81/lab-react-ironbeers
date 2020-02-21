import React from "react";
import "./App.css";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetail from "./components/BeerDetail";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <main className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route path="/beers/:beerId" component={BeerDetail} />
        </Switch>
      </main>
    </div>
  );
}
