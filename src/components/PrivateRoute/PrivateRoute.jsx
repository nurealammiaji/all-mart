import { useContext } from "react";
import { AuthProvider } from "../../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthProvider);

    const location = useLocation();
    console.log(location);

    if(loading) {
        return <div>Loading ...</div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;