import React from 'react'
import { Link } from 'react-router-dom'
import { authentication } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router';

export default function SignIn() {

    let navigate = useNavigate()

    const signInWithGoogle = ()=> {
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            console.log(re)
            navigate("/info")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            sign In MotherFucker!!!!
            <button onClick = {signInWithGoogle}>Niongle</button>
            {/* <Link to = "/info"><button>Please Sign in</button></Link> */}
            
        </div>
    )
}
