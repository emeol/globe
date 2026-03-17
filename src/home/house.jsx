const House = ({ house }) => {
    return (   
        <div className="house-card">
            <h2>{house.name}</h2>
            <p>{house.location}</p>
            <p>Price: GBP {house.price}</p>
            <img src={`/images/${house.image}`} alt={house.name} />
        </div>
     );
}
 
export default House;