const House = ({ house }) => {
    return ( 
        <>
        <h3>House Details</h3>
        <img src={`/images/${house.image}`} alt={house.name} className="w-full h-48 object-cover" />
        <p>{house.name}</p>
        <p>{house.location}</p>
        <p>{house.price}</p>
        </>
     );
}
 
export default House;