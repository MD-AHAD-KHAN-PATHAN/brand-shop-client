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
import BmwInfo from "./Pages/BmwInfo/BmwInfo";
import AudiInfo from "./Pages/AudiInfo/AudiInfo";
import LamborghiniInfo from "./Pages/LamborghiniInfo/LamborghiniInfo";
import FerrariInfo from "./Pages/FerrariInfo/FerrariInfo";
import RollsRoyceInfo from "./Pages/RollsRoyceInfo/RollsRoyceInfo";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

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
                element: <BugattiInfo></BugattiInfo>,
                loader: () => fetch('http://localhost:5000/bugatti')
            },
            {
                path: '/audiInfo',
                element: <AudiInfo></AudiInfo>,
                loader: () => fetch('http://localhost:5000/audi')
            },
            {
                path: '/bmwInfo',
                element: <BmwInfo></BmwInfo>,
                loader: () => fetch('http://localhost:5000/bmw')
            },
            {
                path: '/lamborghiniInfo',
                element: <LamborghiniInfo></LamborghiniInfo>,
                loader: () => fetch('http://localhost:5000/lamborghini')
            },
            {
                path: '/ferrariInfo',
                element: <FerrariInfo></FerrariInfo>,
                loader: () => fetch('http://localhost:5000/ferrari')
            },
            {
                path: '/rollsroyceInfo',
                element: <RollsRoyceInfo></RollsRoyceInfo>,
                loader: () => fetch('http://localhost:5000/rollsroyce')
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
            }
        ]
        
    }
])

export default Route;