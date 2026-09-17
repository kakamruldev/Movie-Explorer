import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="foot">
      <Link className="logo" to="/"><span className="mark">R</span> reelora</Link>
      <p>Made for people who still believe in movie magic.</p>
      <p>© 2026 Reelora. Powered by TVMaze.</p>
    </footer>
  );
}
