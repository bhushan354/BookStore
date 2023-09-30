import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function AllBooks() {
  const allBooks = useSelector((state) => state.book.allBook);

  const bookComponents = [];

  for (let i = 0; i < allBooks.length; i += 1) {
    const book = allBooks[i];
    bookComponents.push(
      <Book
        key={book.item_id}
        title={book.title}
        author={book.author}
        itemId={book.item_id}
      />,
    );
  }

  return <>{bookComponents}</>;
}

export default AllBooks;
