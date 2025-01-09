import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/Cart/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";
import Payments from "../pages/Dashboard/Payments/Payments";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/menu',
          element: <Menu></Menu>,
        },
        {
          path: '/order/:category',
          element: <Order></Order>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
        },
        {
          path: 'updateItems/:id',
          element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'payments',
          element: <PrivateRoute><Payments></Payments></PrivateRoute>,
        },
        {
          path: 'paymentHistory',
          element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        }

      ]
    }
  ]);
  export default router