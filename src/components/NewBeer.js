import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [firstBrewed, setFirstBrewed] = React.useState("");
  const [brewersTips, setBrewersTips] = React.useState("");
  const [attenuation, setAttenuation] = React.useState("");
  const [contributedBy, setContributedBy] = React.useState("");

  const navigate = useNavigate();

  const createBeer = (e) => {
    e.preventDefault();

    //create an object to POST
    let beerToAdd = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation: attenuation,
      contributed_by: contributedBy,
    };

    //call POST with Axios
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerToAdd)
      .then(() => navigate("/all-beers"))
      .catch((err) => console.log(err.message));

    //redirect
  };

  return (
    <div>
      <h2>Create New Beer</h2>
      <Link to="/"> home  </Link>
      <form onSubmit={createBeer}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Tagline</label>
        <input value={tagline} onChange={(e) => setTagline(e.target.value)} />
        <label>Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>First Brewed</label>
        <input
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <label>Brewers tips</label>
        <input
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        <label>Attenuation</label>
        <input
          value={attenuation}
          onChange={(e) => setAttenuation(e.target.value)}
        />
        <label>Contributed By</label>
        <input
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBeer;