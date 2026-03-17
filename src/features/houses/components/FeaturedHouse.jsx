import HouseCard from './HouseCard'

const FeaturedHouse = ({ house }) => {
  if (!house) {
    return <p>No featured house...</p>
  }

  return (
    <div>
      <HouseCard house={house} />
    </div>
  )
}

export default FeaturedHouse
