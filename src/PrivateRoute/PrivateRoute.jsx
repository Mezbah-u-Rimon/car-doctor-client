import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { Dna } from "react-loader-spinner";
import { CircleLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <div className="h-screen w-full pt-24">
            {/* <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            /> */}

            <CircleLoader color="#ffbb02" />
        </div>
    }

    if (!user?.email) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children
    }

};

export default PrivateRoute;