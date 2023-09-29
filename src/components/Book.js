import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ title, author, itemId }) => {
  const dispatch = useDispatch();

  const clearBookFunc = (e) => {
    e.preventDefault();
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <form onSubmit={clearBookFunc}>
        <div>
          <h2>
            {itemId}
          </h2>
          <h2>
            Title:
            {title}
          </h2>
          <h2>
            Author:
            {author}
          </h2>
        </div>
        <button type="submit">
          Remove
        </button>
      </form>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
