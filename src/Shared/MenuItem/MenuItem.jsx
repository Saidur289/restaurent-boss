

const MenuItem = ({item}) => {
    const {image, recipe, name, price} = item
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} className="w-[100px] object-cover" alt="" />
            <div className="text-left">
                <p className="font-bold">{name}----------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;