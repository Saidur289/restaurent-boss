import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, handleSignOut } = useAuth();
  const {isAdmin} = useAdmin()
  const [cart] = useCart()
  const handleLogOut = () => {
    handleSignOut().then(() => {}, []);
  };
  const links = (
    <>
      <li className="uppercase">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="uppercase">
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/order/salad">Our shop</NavLink>
      </li>
      {
        user && isAdmin && <li className="uppercase">
        <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
      </li>
      }
      {
        user && !isAdmin && <li className="uppercase">
        <NavLink to="/dashboard/userHome">Dashboard</NavLink>
      </li>
      }
      <li className="uppercase">
        <NavLink to="/dashboard/cart">
          <button className="flex items-center gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <li className="uppercase">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-black max-w-screen-xl bg-opacity-30  fixed z-10 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Restaurant Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
