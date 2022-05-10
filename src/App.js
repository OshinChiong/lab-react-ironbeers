import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <h1> Ironbeers </h1>
          <Link to="/"> Home </Link>
          <Link to="/all-beers"> All Beers  </Link>
          <Link to="/random-beer"> Random Beers  </Link>
          <Link to="/new-beer"> New beer  </Link>
        </nav>
      </header>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-beers" element={<AllBeers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/beer-details/:beerId" element={<BeerDetails />} />
     
      

      </Routes>
    </div>
  );
}

export default App;
