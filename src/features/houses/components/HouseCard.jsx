import { Link } from 'react-router-dom'

const HouseCard = ({ house }) => {
  return (
    <Link to={`/house/${house.id}`} className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={`/images/${house.image}`} alt={house.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{house.name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{house.location}</p>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">GBP {house.price.toLocaleString()}</p>
      </div>
    </Link>
  )
}

export default HouseCard
