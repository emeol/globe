import { useEffect, useState } from 'react';

export const useHouse = () => {

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

    return { houses, loading, error };
}