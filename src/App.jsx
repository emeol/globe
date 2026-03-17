import { Link } from 'react-router-dom'
import FeaturedHouse from './home/featured-house';
import HouseFilter from './home/house-filter';
import { useHouse } from './hooks/useHouse';

function App() {

  const { houses, loading, error } = useHouse();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">🏠 Globe Homes</h1>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <HouseFilter />
        {loading && <div className="text-center py-12"><p className="text-gray-600 dark:text-gray-400">Loading houses...</p></div>}
        {error && <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded"><p>{error}</p></div>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houses.map((house) => (
              <FeaturedHouse key={house.id} house={house} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
