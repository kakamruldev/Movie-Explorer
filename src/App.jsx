import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="*" element={<Home />} />
  </Routes>
  </BrowserRouter>;
}
