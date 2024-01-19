import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../../compo/SocialLogin/SocialLogin';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const newUser = result.user
                console.log(newUser);
                const saveUser = { name: newUser.name, email: newUser.email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data){
                            navigate('/') 
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Login Successful",
                                showConfirmButton: false,
                                timer: 1500
                            })   
                        }
                       
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
                        </div> */}

                        <input className="btn btn-blok bg-[#D1A054]" type="submit" value="Login" />
                        <div className='flex flex-col items-center'>
                            <Link to='register' className='text-[#5a619c] btn btn-link font-bold'>New here? Create a New Account</Link>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;