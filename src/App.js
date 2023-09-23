import './App.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <div className="mainContainer">
      <header className="appHeader">
        <BrowserRouter>
          <nav>
            <h1>Bookstore CMS</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
