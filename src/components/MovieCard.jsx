import { getYear } from '../utils/formatters';
export default function MovieCard({ show, onSelect }) {
  const image = show.image?.medium || show.image?.original;
  return (
    <article className="card">
      <div className="cover">
        {image ? <img src={image} alt={`${show.name} poster`} /> : <div className="empty">{show.name[0]}</div>}
        <span className="score">★ {show.rating?.average ?? 'N/A'}</span>
      </div>
      <div className="info">
        <p className="type">{show.genres?.[0] || 'Series'}</p>
        <h3>{show.name}</h3>
        <p className="meta">{getYear(show.premiered)} · {show.runtime || 'TV show'}</p>
        <button className="detail" onClick={() => onSelect(show)}>See details →</button>
      </div>
    </article>
  );
}
