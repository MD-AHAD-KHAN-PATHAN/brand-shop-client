import { toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";

const SocialLogin = () => {
    const {googleLogin} = UseHooks();

    const handleLogin = () => {
        googleLogin()
        .then(() => toast.success('Successfully Login'))
        .then((error) => toast.error(error.message))
    }
    return (
        <>
            <div className="divider text-orange-500">continue with</div>
            <div className="">
                <button onClick={handleLogin} className="btn bg-white  hover:bg-orange-400 hover:text-white text-orange-500 border-1 border-orange-400">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;