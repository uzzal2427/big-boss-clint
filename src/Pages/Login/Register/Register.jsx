import { Link } from 'react-router-dom';
import loginImg from '../../../assets/others/authentication2.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import SocialLogin from '../../../compo/SocialLogin/SocialLogin';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
                .then(result => {
                    const newUser = result.user
                    console.log(newUser);
                    const saveUser = {name : data.name , email: data.email};
                    fetch('http://localhost:5000/users',{
                        method: 'POST',
                        headers:{
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.acknowledged == true){
                            reset()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Register Successful",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                        
                    })
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                })
    }

    // const handleRegister = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);

    //     createUser(email, password)
    //         .then(result => {
    //             const newUser = result.user
    //             console.log(newUser);
    //             form.reset()
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode, errorMessage);
    //         })


    // };


    // const handleValidateCaptcha = () => {
    //     const user_captcha_value = captchaRef.current.value;
    //     console.log(user_captcha_value);
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false)
    //     }
    //     else {
    //         setDisable(true)
    //     }
    // }

    return (
        <div className={`hero min-h-screen bg-[url('https://images.unsplash.com/photo-1475965894430-b05c9d13568a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-black bg-opacity-95`}>
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                    <h1 className="text-5xl font-bold"> Please Register </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Name</span>
                            </label>
                            <input type="text" name='name' {...register("name", { required: true })} placeholder="enter your name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 digit</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have small and capital latter and one special character</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Captcha</span>
                            </label>
                            <LoadCanvasTemplate />
                            <input type="text" ref={captchaRef} name='captcha' placeholder="type captcha" className="input input-bordered" required />

                            <button onClick={handleValidateCaptcha} className="btn btn-xs bg-[#D1A054] my-2">validate</button>

                        </div> */}
                        <input className="btn btn-blok bg-[#D1A054]" type="submit" value="Login" />
                        <div className='flex flex-col items-center'>
                            <Link to='/login' className='text-[#5a619c] btn btn-link font-bold'>Already Have Account ? Please Login</Link>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;