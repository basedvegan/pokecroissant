import React from 'react'
import { Link } from 'react-router-dom';


export default function Pokecard({props}) {
    console.log(props)
   let  img = props;
   

    return (
        <div className="pokemon-name">
            <Link to="/">Home</Link>
            {/* uncomment below once app is started or it will crash! */}
            {/* <img src={img.front_default}></img> */}
             
             {/* <img src={img}></img> */}
             <h1>Hello Page 2</h1>
             {/* <div>
            <span>{props.name}</span>
            <img src={img.sprites.front_default}></img>
        </div> */}
        </div>
        
    )
}
