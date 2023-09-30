/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { newBook } from '../redux/books/bookSlice';

const Newbook = () => {
  const dispatch = useDispatch();
  const [handleChaneg, sethandleChaneg] = useState({
    title: '',
    author: '',
  });

  const handleSubmitChanges = (event) => {
    event.preventDefault();
    const id = nanoid();
    const book = { id, ...handleChaneg };
    dispatch(newBook(book));
    sethandleChaneg(handleChaneg);
  };

  return (
    <div>
      <h2>Add Book to the list!</h2>
      <div>
        <input
          type="text"
          placeholder="Your Title Here..."
          name="title"
          value={handleChaneg.title}
          onChange={(event) => {
            const { name, value } = event.target;
            const textContaints = { [name]: value };
            sethandleChaneg({ ...handleChaneg, ...textContaints });
          }}
        />
        <input
          type="text"
          placeholder="Your Author Here..."
          name="author"
          value={handleChaneg.author}
          onChange={(event) => {
            const { name, value } = event.target;
            const textContaints = { [name]: value };
            sethandleChaneg({ ...handleChaneg, ...textContaints });
          }}
        />
        <button type="submit" onClick={handleSubmitChanges} className="darkBlueBtn">
          Add
        </button>
      </div>
    </div>
  );
};

export default Newbook;
