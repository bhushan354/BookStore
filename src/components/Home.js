import React from 'react';
import AllBooks from './AllBooks';
import Newbook from './Newbook';

function Home() {
  return (
    <>
      <div>
        <h1>This is Home</h1>
        <AllBooks />
        <Newbook />
      </div>
    </>
  );
}

export default Home;
