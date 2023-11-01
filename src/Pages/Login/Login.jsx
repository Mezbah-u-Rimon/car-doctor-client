import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import SocialMedia from "../SignUp/socialMedia";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
    // const { signIn } = useContext(AuthContext);

    // custom hooks
    const { signIn } = useAuth();
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }

                //get access token
                axios.post('https://car-doctor-server-plum-eight.vercel.app/jwt', user, /* { withCredentials: true } */)
                    .then(res => {
                        console.log(res.data);
                        if (res.data) {
                            navigate(location?.state ? location.state : "/")
                        }
                    })
            })
            .catch(err => console.log(err))
    }


    return (
        <div style={{ backgroundImage: 'url{img2}' }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center"> Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:text-black">Login</button>
                        </div>
                        <SocialMedia></SocialMedia>
                        <p className="my-4 text-center"> New to Cars Doctor <Link className="font-bold text-orange-500" to="/signup"> Sign Up </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;