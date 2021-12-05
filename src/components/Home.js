import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { authentication } from "../firebase-config";
import { useNavigate } from "react-router";
import Audio from "./Audio";

// const auth = getAuth();

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  const [pokename, setPokename] = useState("pikachu");

  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );

const team = []

const [arr, setArr] = useState([]);

console.log(arr)

// const [teamCard, setTeamCard] = useState([])

// const [team, setTeam] = useState([]);

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

// useEffect(()=> {
// // team.push(document.getElementById("pokeimg").src)
// setTeamCard(team)
// console.log(teamCard)

// return () => {
//   //cleanup for when the component unmounts
// };
// }, []);




  // const arrayOfObj = Object.entries(pokemon).map((e) => ( { [e[0]]: e[1] } ));
  // console.log(arrayOfObj)
  // const newArrayOfObj = Object.values(arrayOfObj).map((e) => ( { [e[0]]: e[1] } ));
  const handleForm = (e) => {
    e.preventDefault();
    console.log("hi");
    let value = document.getElementById("input").value;
    setPokename(value);
  };

  function addImgToTeam() {
   team.push(document.getElementById("pokeimg").src)
  //  team.push(image.front_default);

    console.log(team)

  }

  return (
    <div className="homeApp">
      <div className="nav">
        <Audio />
        <button
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
      <div className="center-box">
        <div className="cards">
          <img id="pokeimg" src={image.front_default} alt=""></img>
          <h1>{pokemon.name}</h1>
          <h1>{pokemon.id}</h1>
          <button onClick={addImgToTeam} >Add to Team</button>
        </div>

        <form onSubmit={handleForm}>
          <input id="input" type="text" placeholder="pokemon name"></input>
        </form>
          <div className="teamCardContainer">
          {/* {jobs.map((jobObj) => {
                         return <Job props = {jobObj} />    */}

          </div>

          <button
        onClick={() => setArr((arr) => [...arr, image.front_default])}
      >
        push
      </button>
      <p>{JSON.stringify(arr)}</p>

      </div>
    </div>
  );
}