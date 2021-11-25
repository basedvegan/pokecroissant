import React from 'react'

export default function Pokecard({props}) {
    console.log(props)
   let  img = props.sprites;

    return (
        <div className="pokemon-name">
            {/* uncomment below once app is started or it will crash! */}
            {/* <img src={img.front_default}></img> */}
             <span>{props.name}</span>
        </div>
    )
}
