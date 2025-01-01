const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute top-0 right-0 mr-4 mt-4 bg-black text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="font-bold text-2xl text-center">{name}</h2>
        <p className="mt-2 text-center">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 bg-slate-100 text-blue-800 border-b-orange-600 border-b-4 mt-4">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
