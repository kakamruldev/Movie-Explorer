import { Link, useLocation } from 'react-router-dom';
export default function Navbar() {
  const isMovies = useLocation().pathname === '/movies';
  return (
    <header className={`nav ${isMovies ? 'dark' : ''}`}>
      <Link className="logo" to="/">
        <span className="mark">M</span> movieDora
      </Link>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/movies">Discover</Link>
        <a href="#foot">About</a>
      </nav>
      <Link className="navbtn" to="/movies">Browse movies →</Link>
    </header>
  );
}
