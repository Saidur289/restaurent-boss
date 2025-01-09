import { FaAd, FaBook, FaCalculator, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaSection } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
   
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
              <ul className="menu p-4">
              {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory'">
                  <FaList></FaList>
                  Payment History
                </NavLink>
              </li>
            </>
          )}
                {/* shared */}
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