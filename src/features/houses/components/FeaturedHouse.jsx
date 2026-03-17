import HouseCard from './HouseCard'
import { useHouseContext } from '../context/houseContext.jsx'

const FeaturedHouse = () => {
  const { houses } = useHouseContext()

  if (!houses.length) {
    return <p className="text-gray-600 dark:text-gray-400">No featured house...</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {houses.map((house) => (
        <HouseCard key={house.id} houseId={house.id} />
      ))}
    </div>
  )
}

export default FeaturedHouse
