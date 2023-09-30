import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
      <div key={book.id}>
        <p>{book.category}</p>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <ul>
          <li>
            <button
              type="button"
              onClick={handleClick}
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
