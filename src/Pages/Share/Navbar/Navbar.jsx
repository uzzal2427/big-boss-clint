import { Link } from "react-router-dom";


const Navbar = () => {
    const navItems = <>
        <li className="pl-4 uppercase btn btn-outline btn-warning"><Link>Home</Link></li>
        <li className="pl-4 uppercase btn btn-outline btn-warning"><Link to='/menu'>menu</Link></li>
        <li className="pl-4 uppercase btn btn-outline btn-warning"><Link to='/order'>order</Link></li>
    </>
    return (
        <div>
            <div className="navbar max-w-[1230px] bg-black text-white opacity-80 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown text-gray-400">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Big Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;