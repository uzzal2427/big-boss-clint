import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import { FaSpoon } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const image_hosting = import.meta.env.VITE_IMAGE_TOKEN;

const AddItem = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${image_hosting}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url
                    const { name, category, price , recipe } = data;
                    const newItem = { name, category , price : parseFloat(price), 
                    recipe, image: imgUrl }
                    console.log(newItem);
                    fetch('http://localhost:5000/menu',{
                        method : 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newItem)
                    })
                    .then(res => res.json())
                    .then(data => {
                       if(data.insertedId){
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Item has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                       }
                    })
                }
            })
    };
    console.log(errors);
    console.log(image_hosting);
    return (
        <div className="w-full p-10">
            <SectionTitle heading={'ADD AN ITEM'} subHeading={"What's new "}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] p-10">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Recipe name*</span>
                    </div>
                    <input type="text" placeholder="Recipe name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </label>
                <div className="flex gap-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={'category'} {...register("category", { required: true })} className="select select-bordered w-full max-w-xs">
                            <option disabled>Category</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>soup</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input type="text" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full" />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details*</span>
                    </div>
                    <textarea {...register("recipe", { required: true, maxLength: 500 })} className="textarea textarea-bordered h-40" placeholder="Recipe Details"></textarea>
                </label>
                <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs my-2 block" />
                <input className="my-2 py-2 px-4 text-white bg-gradient-to-r from-[#835D23] to-[#B58130]" type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddItem;