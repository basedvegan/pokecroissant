import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Pokecard from "./components/Pokecard";

function App() {
  // const url = "https://play.pokemonshowdown.com/data/pokedex.json";

  const [pokemon, setPokemon] = useState([]);

  const [pokename, setPokename] = useState("pikachu");

  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );

  useEffect(() => {
    //put effect here
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokename)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
        setImage(data.sprites)
      });
    return () => {
      //cleanup for when the component unmounts
    };
  }, [pokename]);

  console.log(image.front_default);

  const handleForm = (e) => {
    e.preventDefault()
    console.log("hi")
    let value = document.getElementById("input").value;
    setPokename(value)
  };

  return (
    <div className="App">
      <div className="cards">
        {/* {pokemon.map((pokeObj) => {
        return <Pokecard props={pokeObj} />
      })} */}
      </div>
      <form onSubmit={handleForm}>
        <input id="input" type="text" placeholder="pokemon name"></input>
      </form>
      <img src={image.front_default} alt=""></img>
    </div>
  );
}

export default App;


