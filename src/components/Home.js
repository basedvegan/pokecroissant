import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { authentication } from "../firebase-config";
import { useNavigate } from "react-router";
import Audio from "./Audio";
import Team from "./Team";

// const auth = getAuth();

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  const [pokename, setPokename] = useState("pikachu");

  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );

  const [arr, setArr] = useState([]);


  console.log(arr);

  const navigate = useNavigate();

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

  // console.log(pokemon);


  const handleForm = (e) => {
    e.preventDefault();
    console.log("hi");
    let value = document.getElementById("input").value;
    setPokename(value);
  };


const handleRemoveItems = (e) => {


  //  setArr(arr.filter(img => img.name !== name));
  console.log("clicked")

  setArr([])
//    console.log(name)
//    if(arr.includes(name)){
//       arr.splice(arr.indexOf(name), 1);  //deleting
//   }else{
// console.log("nope")
//   }
//   console.log(arr);

 };
 
  return (
    <div className="homeApp">
      <div className="nav">
        <Audio />
        <button className="sign-out"
          onClick={() =>
            signOut(authentication)
              .then(() => {
                console.log("sign out successful");
              })
              .then(() => navigate("/"))
              .catch((err) => {
                console.log(err);
              })
          }
        >
          Signout for reals
        </button>
      </div>
      <div className="input-container">
        <p className="line-1 anim-typewriter">Poké Search!</p>
      <form onSubmit={handleForm}>
        <input id="input" type="text" placeholder="pokemon name"></input>
      </form>
      </div>
      <div className="center-box">
        <div className="cards">
          <img id="pokeimg" src={image.front_default} alt=""></img>
          <h1>{pokemon.name}</h1>
          <h1>{pokemon.id}</h1>
          <button
            onClick={() => setArr((arr) => [...arr, image.front_default])}
          >
            Add to Team
          </button>
        </div>
        <div className="teamRoster">
          <div className="img-container">
            {/*Map out your job component below...  */}
            {arr.map((img) => {
              return <Team props={img} />
              ; 
            })}
          </div>
          <button onClick={handleRemoveItems}>reset team</button>
        </div>
      </div>
    </div>
  );
}
