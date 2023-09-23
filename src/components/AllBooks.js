import React from 'react';
import Newbook from './Newbook';
import Book from './Book';

function AllBooks() {
  const books = [
    { title: 'A', author: 'Author A' },
    { title: 'B', author: 'Author B' },
    { title: 'C', author: 'Author C' },
  ];
  return (
    <>
      {books.map((book) => (
        <div key={book.title}>
          <Book title={book.title} author={book.author} />
        </div>
      ))}
      <Newbook />
    </>
  );
}

export default AllBooks;
