import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";


const auth = getAuth(app);
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }


    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                    .then(res => {
                        console.log(res.data.token);
                        localStorage.setItem('secret-token', res.data.token)
                    })      
            }
            else(localStorage.removeItem('secret-token'))
            setLoader(false)
        })
        return () => {
            return unsubscribe
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        login,
        logOut,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;