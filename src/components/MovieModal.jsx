import { useEffect, useRef } from 'react';
import { cleanSummary, getYear } from '../utils/formatters';
export default function MovieModal({ show, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    function closeWithEscape(event) { if (event.key === 'Escape') onClose(); }
    document.addEventListener('keydown', closeWithEscape);
    return () => document.removeEventListener('keydown', closeWithEscape);
  }, [onClose]);
  if (!show) return null;
  return (
    <div className="overlay" onMouseDown={onClose}>
      <section className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="close" onClick={onClose} ref={closeRef}>×</button>
        {show.image?.original && <img className="art" src={show.image.original} alt={show.name} />}
        <div className="text">
          <p className="type">{show.status}</p>
          <h2>{show.name}</h2>
          <p className="meta">★ {show.rating?.average ?? 'N/A'} · {getYear(show.premiered)} · {show.language}</p>
          <p>{cleanSummary(show.summary) || 'No summary is available for this title.'}</p>
          <p className="tags">{show.genres?.join(' · ') || 'Drama'}</p>
          <button className="button" onClick={onClose}>Close details</button>
        </div>
      </section>
    </div>
  );
}
