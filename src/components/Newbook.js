import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

function Newbook() {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookData.title !== '' && bookData.author !== '') {
      dispatch(
        addBook({
          ...bookData,
          category: 'Action',
          item_id: Date.now().toString(),
        }),
      );
      setBookData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div>
      <p>Add a new Book!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Title Here..."
          name="title"
          value={bookData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name Of Author..."
          name="author"
          value={bookData.author}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Newbook;
