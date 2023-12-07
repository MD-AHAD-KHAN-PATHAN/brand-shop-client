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
import Terms from "./Pages/Terms&Condition/Terms";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
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
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/myCart')
            },
            {
                path: '/bugattiInfo',
                element: <BugattiInfo></BugattiInfo>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/bugatti')
            },
            {
                path: '/audiInfo',
                element: <AudiInfo></AudiInfo>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/audi')
            },
            {
                path: '/bmwInfo',
                element: <BmwInfo></BmwInfo>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/bmw')
            },
            {
                path: '/lamborghiniInfo',
                element: <LamborghiniInfo></LamborghiniInfo>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/lamborghini')
            },
            {
                path: '/ferrariInfo',
                element: <FerrariInfo></FerrariInfo>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/ferrari')
            },
            {
                path: '/rollsroyceInfo',
                element: <RollsRoyceInfo></RollsRoyceInfo>,
                loader: () => fetch('https://brand-shop-server-zeta-nine.vercel.app/rollsroyce')
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-zeta-nine.vercel.app/car/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-zeta-nine.vercel.app/car/${params.id}`)
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }

        ]
        
    }
])

export default Route;