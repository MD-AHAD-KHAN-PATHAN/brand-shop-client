import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import AddProduct from "./Pages/AddProduct/AddProduct";
import MyCart from "./Pages/MyCart/MyCart";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BugattiInfo from "./Pages/BugattiInfo/BugattiInfo";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/bugattiInfo',
                element: <BugattiInfo></BugattiInfo>
            },
            {

            }
        ]
        
    }
])

export default Route;