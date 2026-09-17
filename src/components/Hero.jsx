import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="copy">
        <p className="tag">YOUR NEXT OBSESSION AWAITS</p>
        <h1>Stories that <em>stay with you.</em></h1>
        <p>Browse a world of unforgettable films and television. Your perfect watch is closer than you think.</p>
        <Link className="button" to="/movies">Explore collection →</Link>
      </div>
      <img className="poster" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85" alt="Cinematic scene" />
    </section>
  );
}
