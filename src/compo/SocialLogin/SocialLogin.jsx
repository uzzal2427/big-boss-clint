import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const newUser = result.user
                console.log(newUser);
                const saveUser = { name: newUser.displayName , email: newUser.email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged == true) {
                            alert('Registered')
                        }

                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <div>
            <p>Or sign in with</p>
            <div className='flex'>
                <CiFacebook size={35}></CiFacebook>
                <FaGoogle onClick={handleGoogleLogin} size={35}></FaGoogle>
            </div>
        </div>
    );
};

export default SocialLogin;