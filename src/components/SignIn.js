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
    // <audio id="my_audio" src="https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/vvdpydwp/101-opening.mp3" loop="loop"></audio>
    

    return (
        
        <div className="signin-page">
            
            <img className="title" src="https://www.onlinepalette.com/wp-content/uploads/2021/07/Pokemon-Logo.png"></img>
            <h1 className="team">Team Builder</h1>
        <div className="main-con-signin">
            
            <button className="signin" onClick = {signInWithGoogle}><img className="pokeball" src="https://www.onlinepalette.com/wp-content/uploads/2021/07/Pokeball.png" alt="" height="500px" width="500px"></img><h1 className="click-ball">Sign In</h1></button>
            {/* <img className="pokeball" src="https://www.onlinepalette.com/wp-content/uploads/2021/07/Pokeball.png" alt="" height="100px" width="100px"></img> */}
            {/* <Link to = "/info"><button>Please Sign in</button></Link> */}
            
        </div>
        </div>
    )
}
