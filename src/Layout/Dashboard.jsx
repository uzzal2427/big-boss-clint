import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaCalendarAlt, FaWallet, FaCommentAlt, FaCalendarCheck } from "react-icons/fa";
import { FaBook, FaSpoon, FaUsers } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    // const isAdmin = false ;
    const {isAdmin} = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] uppercase">
                    {/* Sidebar content here */}
                    <div className=" text-center mb-16">
                        <h1 className="text-4xl">Big Boss</h1>
                        <small className="text-2xl">Restaurant</small>
                    </div>

                    {
                        isAdmin ? <>
                            <li><NavLink to='dashboard/home'> <FaHome></FaHome> Admin Home</NavLink></li>

                            <li><NavLink to='mycart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>

                            <li><NavLink to='addItem'> <FaSpoon></FaSpoon> Add Items</NavLink></li>

                            <li><NavLink to='dashboard/payment'> <FaBook></FaBook> Booking</NavLink></li>

                            <li><NavLink to='allUsers'> <FaUsers></FaUsers> All Users</NavLink></li>
                        </> :

                            <>
                                <li><NavLink to='dashboard/home'> <FaHome></FaHome> User Home</NavLink></li>

                                <li><NavLink to='mycart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>

                                <li><NavLink to='dashboard/reservation'> <FaCalendarAlt></FaCalendarAlt> reservation</NavLink></li>

                                <li><NavLink to='dashboard/payment'> <FaWallet></FaWallet> payment history</NavLink></li>

                                <li><NavLink to='dashboard/review'> <FaCommentAlt></FaCommentAlt> add review</NavLink></li>

                                <li><NavLink to='dashboard/booking'> <FaCalendarCheck></FaCalendarCheck> my booking</NavLink></li>
                            </>
                    }



                    <div className="divider"></div>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;