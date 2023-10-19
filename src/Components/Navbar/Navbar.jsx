import { Link, NavLink } from "react-router-dom";
import UseHooks from "../Hooks/UseHooks";


const Navbar = () => {

    const { user, logOut } = UseHooks();


    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/terms'>Terms & Condition</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start" data-aos="fade-down">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="w-40"><img src="https://i.ibb.co/y8QNzhC/Screenshot-2023-10-18-012725.jpg" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex" data-aos="fade-down">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="dropdown dropdown-end" data-aos="fade-down">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <Link to='/'><button onClick={logOut} className="btn btn-sm  btn-ghost">Logout</button></Link>
                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost" data-aos="fade-down">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;