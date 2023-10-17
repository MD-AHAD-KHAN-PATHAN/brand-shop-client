import { Navigate, useLocation } from "react-router-dom";
import UseHooks from "../../Components/Hooks/UseHooks";

const PrivateRoute = ({children}) => {

    const {user, loading} = UseHooks();

    const location = useLocation();


    if(loading) {
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;