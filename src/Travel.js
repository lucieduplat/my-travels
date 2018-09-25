// src/Quote.js
import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <img src={photo} alt={destination} />
        <figcaption>
        	<bloquote> {destination}, {country} </bloquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;