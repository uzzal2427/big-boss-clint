

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-[106px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ---------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-bold">${price}</p>
        </div>
    );
};

export default MenuItem;