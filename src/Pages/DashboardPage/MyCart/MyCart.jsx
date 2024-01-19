import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want To Delete This Item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged == true) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <section className="w-full">
            <Helmet title="Big Boss || MyCart">  </Helmet>
            <SectionTitle subHeading={'MyCart'} heading={'WANNA ADD MORE?'}></SectionTitle>
            <div className="flex justify-around items-center my-5 gap-6">
                <h1 className="text-3xl">Total Items : {cart.length}</h1>
                <h1 className="text-3xl">Total price : ${total}</h1>
                <Link to='/dashboard/payment'><button className="btn btn-warning">Pay</button></Link>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>
                                            {item.name}
                                        </p>
                                    </td>
                                    <td className="font-bold text-yellow-500">${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="bg-red-500 btn btn-lg">
                                            <FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyCart;