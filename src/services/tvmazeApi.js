const API_BASE_URL = 'https://api.tvmaze.com';

async function request(path, signal) {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal });
  if (!response.ok) throw new Error('Could not reach the movie List. Please try again.');
  return response.json();
}

export function getShows(signal) { 
  return request('/shows?page=1', signal); }

export async function searchShows(query, signal) {
  const results = await request(`/search/shows?q=${encodeURIComponent(query)}`, signal);
  return results.map((result) => result.show);
}
