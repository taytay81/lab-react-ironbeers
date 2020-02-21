import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavLink exact to="/beers">
        <img src="/images/beers.png" alt="allbeerImg" />
        <h2>All beers</h2>
      </NavLink>
      <NavLink exact to="/random-beer">
        <img src="/images/random-beer.png" alt="randombeer" />
        <h2>Random beers</h2>
        <p> This section is about all beers </p>
      </NavLink>
      <NavLink exact to="/new-beer">
        <img src="/images/new-beer.png" alt="newbeer" />
        <h2>New beer</h2>
        <p> This section is about random beers</p>
      </NavLink>
    </div>
  );
}
