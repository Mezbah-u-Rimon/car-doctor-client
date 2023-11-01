import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialMedia from "./socialMedia";


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center"> Sign Up  </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name </span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:text-black"> Sign Up </button>
                        </div>
                        <SocialMedia></SocialMedia>
                        <p className="my-4 text-center"> Already have an account  <Link className="font-bold text-orange-500" to="/login"> Login </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;