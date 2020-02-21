import React from "react";

export default function PrintBeer({
  name,
  image_url,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by
}) {
  return (
    <div>
      <h2 className="title">{name}</h2>
      <img src={image_url} alt="beer-image" />
      <div>{tagline}</div>
      <div>{first_brewed}</div>
      <div>{attenuation_level}</div>
      <div>{description}</div>
      <div>{contributed_by}</div>
    </div>
  );
}
