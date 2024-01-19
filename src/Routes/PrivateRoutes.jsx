
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    if (loader) {
        return <div>Loading...</div>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' ></Navigate>
};

export default PrivateRoutes;