import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function AllBooks() {
  const allBook = useSelector((state) => state.book.allBook);

  return (
    <>
      {allBook.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          item_id={book.item_id}
        />
      ))}
    </>
  );
}

export default AllBooks;
