import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import Ring from './Ring';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <>
      <div key={book.id}>
        <p className="genre">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul>
          <li>
            <button type="button" className="smallButton">
              Comments
            </button>
          </li>
          <li>
            <button
              type="button"
              className="smallButton"
              onClick={handleClick}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="smallButton">
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div className="progressCircle">
        <Ring />
        <div className="task-progress">
          <p className="complete-task">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="thirdFlex">
        <h4 className="genre">CURRENT CHAPTER</h4>
        <h3>Chapter 3 : Lesson Learned</h3>
        <button type="button" className="darkBlueBtn">
          UPDATE PROGRESS
        </button>
      </div>
    </>
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
