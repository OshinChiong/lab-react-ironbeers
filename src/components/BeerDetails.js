import React from "react";
import { useParams, Link  } from "react-router-dom";
import axios from "axios";


function BeerDetails() {
    const [beer, setBeer] = React.useState({});
  
    const params  = useParams();

    React.useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
          .then((results) =>  setBeer(results.data))
          .catch((err) => 
            console.error(err.message));
      }, []);
 
   
return (
<div>
    <h1> Beer Details </h1>
    <img src={beer.image_url}/>
    <p> {beer.name}</p>
    <p> {beer.tagline}</p>
    <p> {beer.first_brewed}</p>
    <p> {beer.attenuation_level}</p>
    <p> {beer.description}</p>
    <p> {beer.contributed_by}</p>

</div>
);
}



export default BeerDetails;



// console.log(props.random);
// if (props.random) {
//   axios
//     .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
//     .then((results) => {
//       setBeer(results.data);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// } else {
