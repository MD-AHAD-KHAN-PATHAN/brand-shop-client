import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseHooks from '../../Components/Hooks/UseHooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { userLogin } = UseHooks();
    const navigate = useNavigate();
    const location = useLocation();



    function slow(){
        navigate(location?.state ? location.state : '/');
    }

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(() => {
                toast.success('User login Successfull');
                setTimeout(slow, 2000);
            })
            .catch((error) => {
                toast.error(error.code);
            })

    }

    

    return (
        <>
            <div className=" min-h-screen w-full justify-center md:bg-base-200 md:my-0 my-10">
                <div className="md:hero-content md:flex md:flex-row-reverse md:mx-0 mx-6">
                    <div className="text-center" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                        <h1 className="md:text-5xl text-3xl font-bold md:mb-0 mb-6">Please Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-orange-500">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="border-1 border-orange-400 input input-bordered" required/>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-orange-500">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="border-1 border-orange-400 input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn bg-white  hover:bg-orange-400 hover:text-white text-orange-500 border-1 border-orange-400">Login</button>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </form>
                            <label className="label text-orange-500">
                                Haven't account? <Link to="/registration" className="text-orange-500 label-text-alt link link-hover">Please Registration</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;