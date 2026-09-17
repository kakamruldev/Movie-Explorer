import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="foot">
      <Link className="logo" to="/"><span className="mark">M</span> movieDora</Link>
      <p>Made for people who still believe in movie magic.</p>
      <p>© 2026 movieDora. Powered by TVMaze.</p>
    </footer>
  );
}
