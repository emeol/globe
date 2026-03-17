import { useEffect, useState } from 'react'
import './App.css'
import FeaturedHouse from './home/featured-house';

function App() {

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('/houses.json');
      
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error('Error fetching houses:', error);
        setError('Failed to load houses. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchHouses()
  }, [])

  return (
    <>
      <h1>React</h1>
      {loading && <p>Loading houses...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && houses.map((house) => (
        <FeaturedHouse key={house.id} house={house} />
      ))}
    </>
  )
}

export default App
