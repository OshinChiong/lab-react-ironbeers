import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import axios from "axios";


function AllBeers() {
    const [allBeers, setAllBeers] = React.useState([""]);
  
    React.useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/")
        .then((results) => {
          setAllBeers(results.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }, []);
  
       

return (
   <div> 
    <Link to="/"> home  </Link>
    <h1> All beers </h1>
  
 
   
     {allBeers.map((item) => {
    
         return (
             <div> 
   <p> {item.name} </p>
   <img src={item.image_url}/>
   <p> {item.tagline} </p>
   <p> {item.contributed_by} </p>
   <Link to={`/beer-details/${item._id}`}> See Details  </Link>
     </div>
    );
     })}
</div>
);
}
export default AllBeers;