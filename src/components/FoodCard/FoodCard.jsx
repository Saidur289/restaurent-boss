import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const [, refetch] = useCart()
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const handleAddToCart = food => {
   
    // console.log(food);
    if(user && user?.email){
      // send data to database
      const cartItem = {
        menuId: _id,
        email: user?.email,
        image,
        price,
        name
      }
      axiosSecure.post('/carts', cartItem)
      .then((res) => {
        refetch()
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your ${name} has been saved`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      
    }
    else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login in for add cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: location?.pathname})
        }
      });
    }

  }
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
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 bg-slate-100 text-blue-800 border-b-orange-600 border-b-4 mt-4">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
