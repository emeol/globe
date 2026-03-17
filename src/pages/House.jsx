import { Link, useParams } from 'react-router-dom'
import { useHouseContext } from '../features/houses/context/houseContext.jsx'

const House = () => {
    const { id } = useParams()
    const { houses, loading, error } = useHouseContext()
    const selectedHouse = houses.find((item) => String(item.id) === id)

    if (loading) {
        return <p className="p-6 text-gray-600 dark:text-gray-400">Loading house details...</p>
    }

    if (error) {
        return <p className="p-6 text-red-600 dark:text-red-400">{error}</p>
    }

    if (!selectedHouse) {
        return (
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">House not found</h3>
                <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Back to listings</Link>
            </div>
        )
    }

    return ( 
        <div className="max-w-4xl mx-auto p-6">
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to listings</Link>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white my-4">House Details</h3>
            <img src={`/images/${selectedHouse.image}`} alt={selectedHouse.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{selectedHouse.name}</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{selectedHouse.location}</p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-2">GBP {selectedHouse.price.toLocaleString()}</p>
        </div>
     )
}
 
export default House;