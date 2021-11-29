import React from 'react'
import { Link } from 'react-router-dom'
import { authentication } from '../firebase-config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignIn() {
    const signInWithGoogle = ()=> {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            console.log(re)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            sign In MotherFucker!!!!
            <button onClick = {signInWithGoogle}>Niongle</button>
            <Link to = "/info"><button>Please Sign in</button></Link>
            
        </div>
    )
}
