import React from 'react'

export default function Pokecard({props}) {
    return (
        <div className="pokemon-name">
            <span>{props.name}</span>
        </div>
    )
}
