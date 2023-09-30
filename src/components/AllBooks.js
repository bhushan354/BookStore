import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBooks } from '../redux/books/bookSlice';
import Book from './Book';
import '../App.css';

const AllBooks = () => {
  const {
    books, pending, complete,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch, complete]);

  if (pending) {
    return (
      <div>
        <h2>Your Books Are Loading...</h2>
      </div>
    );
  }
  if (books.length === 0) return <h1>Empty List , Add some Books</h1>;

  // for render method fixing previousLoop was map , checkAgian
  const bookElements = [];

  books.forEach((book) => {
    bookElements.push(
      <div key={book.id} className="wholeSingleBook">
        <Book key={book.id} book={book} />
      </div>,
    );
  });

  return bookElements;
};

export default AllBooks;
