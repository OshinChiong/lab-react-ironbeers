import React from "react";
import axios from "axios";

const BookList = () => {
  const [allBooks, setAllBooks] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5001/book/all-books")
      .then((results) => {
        setAllBooks(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <h2> MY BOOKS </h2>
      {allBooks.map((book) => {
        return (
          <div>
            <h3>{book.title}</h3>
            <p>written by {book.author}</p>
            <p> {book.page} </p>
            <p>genre: {book.genre}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BookList;