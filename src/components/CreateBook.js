import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSong = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [pages, setPages] = React.useState("");
  const [genre, setGenre] = React.useState("");

  const navigate = useNavigate();

  function addBookToBackend(e) {
    e.preventDefault();

    let newBook = {
      title: title,
      author: author,
      pages: pages,
      genre: genre,
    };

    axios
      .post("http://localhost:5001/book/create", newBook)
      .then((results) => {
        console.log("Success", results.data);
        navigate("/book-list");
      })
      .catch((err) => {
        console.log("Something wennt wrong", err.message);
      });
  }

  return (
    <div>
      <h2> Add a New Book to the list </h2>
      <form onSubmit={addBookToBackend}>
        <label> Title </label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
        <label>Author</label>
        <input onChange={(e) => setAuthor(e.target.value)} value={author} />
        <label>Pages </label>
        <input onChange={(e) => setPages(e.target.value)} value={pages} />
        <label>Genre</label>
        <input onChange={(e) => setGenre(e.target.value)} value={genre} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateSong;