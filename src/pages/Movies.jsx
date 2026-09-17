import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { getShows, searchShows } from '../services/tvmazeApi';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true); setError('');
      try { setShows(query.trim() ? await searchShows(query.trim(), controller.signal) : await getShows(controller.signal)); }
      catch (requestError) { if (requestError.name !== 'AbortError') setError(requestError.message); }
      finally { if (!controller.signal.aborted) setLoading(false); }
    }, query.trim() ? 350 : 0);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [query]);
  const title = useMemo(() => query.trim() ? `Results for “${query.trim()}”` : 'Trending this week', [query]);
  return (
    <div className="app">
      <Navbar />
      <main className="movies">
        <p className="tag">FIND SOMETHING GREAT</p>
        <h1>{title}</h1>
        <SearchBar value={query} onChange={setQuery} />
        {loading && <p className="status">Loading movies...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && shows.length === 0 && <p className="status">No movies found.</p>}
        <div className="grid">
          {shows.map((show) => <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />)}
        </div>
      </main>
      <Footer />
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}
