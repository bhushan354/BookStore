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
      <div>
        <h2>
          Title:
          {title}
        </h2>
        <h3>
          Author:
          {author}
        </h3>
      </div>
      <button type="submit" onClick={clearBookFunc}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
