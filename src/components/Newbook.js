import React from 'react';

function Newbook() {
  return (
    <div>
      <h2>Add a new Book!</h2>
      <input type="text" placeholder="Your Book Title..." />
      <input type="text" placeholder="Author..." />
      <button type="button">New Book</button>
    </div>
  );
}

export default Newbook;
