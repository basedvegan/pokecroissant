import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pokecard from "./Pokecard";
import { getAuth, signOut } from "firebase/auth";
import { authentication } from "../firebase-config"
import { useNavigate } from "react-router";
import Audio from "./Audio";
// const auth = getAuth();

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  const [pokename, setPokename] = useState("pikachu");

  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );
  const navigate = useNavigate()

  useEffect(() => {
    //put effect here
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokename)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setImage(data.sprites);
      });
    return () => {
      //cleanup for when the component unmounts
    };
  }, [pokename]);

  console.log(pokemon);

  // const arrayOfObj = Object.entries(pokemon).map((e) => ( { [e[0]]: e[1] } ));
  // console.log(arrayOfObj)
  // const newArrayOfObj = Object.values(arrayOfObj).map((e) => ( { [e[0]]: e[1] } ));
  const handleForm = (e) => {
    e.preventDefault();
    console.log("hi");
    let value = document.getElementById("input").value;
    setPokename(value);
  };

  return (
    <div className="App">
      <Audio/>
      <div className="cards">
        {/* <Pokecard props={pokemon}/> */}

        {/* {Object.entries(pokemon).map((pokeObj) => {
          console.log(pokeObj)
        return <Pokecard props={pokeObj} 
        />
      })} */}
      </div>
      {/* <Link to="/">
        <button>Get The Fuck Out!!!</button>
      </Link> */}
      <button
        onClick={() =>
          signOut(authentication).then(() => {
            console.log("sign out successful");
          }).then(() => navigate('/')) .catch ((err) => {console.log(err)})
        }
      >
        Signout for reals 
      </button>
      <img src={image.front_default} alt=""></img>
      <h1>{pokemon.name}</h1>
      <form onSubmit={handleForm}>
        <input id="input" type="text" placeholder="pokemon name"></input>
      </form>
      <h1>{pokemon.id}</h1>
    </div>
  );
}
