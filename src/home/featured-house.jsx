import House from "./house";

const FeaturedHouse = ({ house }) => {
    if (!house) {
        return <p>No featured house...</p>;
    }
    return (   
        <div className="featured-house">
            <House house={house} />
        </div>
     );
}
 
export default FeaturedHouse;