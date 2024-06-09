import { FaBook, FaEdit, FaHome, FaList, FaUser } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { GiPostStamp } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
// import useCart from "../Hooks/useCart";


const Dashboard = () => {
    // const [cart] = useCart();
    // todo: get isadmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex max-w-screen-xl mx-auto">
            {/* dashboard side bar */}
            <div className="w-52 min-h-screen bg-[#008080] text-white">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                <GiPostStamp />
                                    Sales Report</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaEdit></FaEdit>
                                    Manage Category</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentManagement">
                                    <FaBook></FaBook>
                                    Payment Management</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUser></FaUser>
                                    Manage Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Payment History</NavLink>
                                </li>
                            </>
                    }
                    {/* shared Navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                        <FcShop />
                            Shop</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;