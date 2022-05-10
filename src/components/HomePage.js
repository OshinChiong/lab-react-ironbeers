import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const HomePage = () => {
     
    return (
        <div>
    
     <Link to="/all-beers">    
        <img src={beers}/> 
        <h2> All beers </h2>
        <p>Lorem ipsum  </p>
        </Link>

     <Link to="/random-beer">     
        <img src={randomBeer}/> 
        <h2> Random beers </h2>
        <p>Lorem ipsum  </p>
        </Link> 

     <Link to="/new-beer">   
        <img src={newBeer}/> 
        <h2> New Beers </h2>
        <p>Lorem ipsum  </p>
        </Link>  
        </div>
    )
}


export default HomePage;