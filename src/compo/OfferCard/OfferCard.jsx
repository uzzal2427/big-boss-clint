import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const OfferCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const [,refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation()

    const handelAddToCart = item => {
        const CartItems = {menuItemId : _id ,image, name, price, email : user.email }
        console.log(item);
        if (user.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(CartItems)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged === true) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Item has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
        } else {
            Swal.fire({
                title: "Please Login First",
                text: "To continue , you need to login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from : location}})
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute top-5 right-5 bg-black text-white p-2 rounded-2xl">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div onClick={() => handelAddToCart(item)} className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;