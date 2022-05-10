import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams  } from "react-router-dom";
import axios from "axios";


const RandomBeer = () => {
    const [beer, setBeer] = React.useState({});
  
    const params  = useParams();

    React.useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((results) =>  setBeer(results.data))
          .catch((err) => 
            console.error(err.message));
      }, []);
 

    
    return (
        <div>
        <Link to="/"> home  </Link>
        <h1> Check out Random beers </h1>

          <img src={beer.image_url}/>
          <p> {beer.name}</p>
          <p> {beer.tagline}</p>
          <p> {beer.first_brewed}</p>
          <p> {beer.attenuation_level}</p>
          <p> {beer.description}</p>
          <p> {beer.contributed_by}</p>
        </div>
    )
}



export default RandomBeer;