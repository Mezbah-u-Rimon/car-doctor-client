import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";

const SocialMedia = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { googleLogin } = useContext(AuthContext);

    const handleSocialLogin = media => {
        media()
            .then(() => {
                toast.success("user sign in successfully");
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div>
            <p className="text-center my-4"> Or Sign In with </p>
            <div className="flex justify-around items-center">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="bt"> <FcGoogle className="text-5xl"></FcGoogle> </button>
                {/* <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn bg-amber-500 text-black">Github
                </button> */}
            </div>
        </div>
    );
};

export default SocialMedia;