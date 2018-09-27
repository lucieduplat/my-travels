import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
 {		
        photo: "https://www.voyage-prive.com/s/images/visual/login/backgrounds/2048x1463-seychelles.jpg",
        country: "Miami",
        distance: "5000 km",
        destination: "US"
  },
  {
        photo: "https://www.monde-du-voyage.com/images/monde-du-voyage.jpg",
        country: "Floride",
        distance: "3000 km",
        destination: "Allemagne"
  },
  {
        photo: "https://www.nacel.fr/medias/_cache/produits/97/imagePrincipale/1920_1440/cours-decouverte-dubai-marina.jpg",
        country: "Dubai",
        distance: "8000 km",
        destination: "Arabie Saoudite"
  },
  {

  		photo: "https://static.posters.cz/image/1300/carta-da-parati/rio-de-janeiro-i25132.jpg",
        country: "Rio",
        distance: "234 km",
        destination: "Brezil"
  },
  {

        photo: "http://www.angelio.net/blogangelio/wp-content/uploads/2018/01/berlin-vie-nocturne.jpg",
        country: "Berlin",
        distance: "234 km",
        destination: "Allemagne"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel photo={travel.photo} country={travel.country} distance={travel.distance} destination={travel.destination} />
    ))}
  </div>
);

export default Travels;