
const OfferCard = ({ item }) => {
    const { image, name, price,recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute top-5 right-5 bg-black text-white p-2 rounded-2xl">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;