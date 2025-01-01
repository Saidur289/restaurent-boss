import { FaAd, FaCalculator, FaCalendar, FaHome, FaList, FaSearch, FaUser } from "react-icons/fa";
import { FaSection } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
              <ul className="menu p-4">
                <li><NavLink to = '/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink to = '/dashboard/reservation'><FaList></FaList> Reservation</NavLink></li>
                <li><NavLink to = '/dashboard/cart'><FaList></FaList> My Cart({cart.length})</NavLink></li>
                <li><NavLink to = '/dashboard/bookings'><FaCalendar></FaCalendar> My Bookings</NavLink></li>
                <li><NavLink to = '/dashboard/reviews'><FaAd></FaAd> Add Review</NavLink></li>
                <div className="divider"></div>
                <li><NavLink to = '/'><FaHome></FaHome> Home</NavLink></li>
                <li><NavLink to = '/order/salad'><FaSection></FaSection> Menu</NavLink></li>
              </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet/>

            </div>
        </div>
    );
};

export default Dashboard;