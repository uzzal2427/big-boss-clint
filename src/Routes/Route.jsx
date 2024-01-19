import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashboardPage/MyCart/MyCart";
import PrivateRoutes from "./privateRoutes";
import AllUsers from "../Pages/DashboardPage/AllUsers/AllUsers";
import AddItem from "../Pages/DashboardPage/AddItem/AddItem";
import Payment from "../Pages/DashboardPage/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order',
        element: <Order></Order>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      }
    ]
  },
  {
    path: '/login',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element:<Register></Register>

      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
        
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path : 'addItem',
        element: <AddItem></AddItem>
      }
    ]
  }
]);