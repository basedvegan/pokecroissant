import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignIn from "./components/SignIn";

function App() {
  // const url = "https://play.pokemonshowdown.com/data/pokedex.json";

//   const [pokemon, setPokemon] = useState([]);

//   const [pokename, setPokename] = useState("pikachu");

//   const [image, setImage] = useState(
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
//   );

//   useEffect(() => {
//     //put effect here
//     fetch(`https://pokeapi.co/api/v2/pokemon/` + pokename)
//       .then((response) => response.json())
//       .then((data) => {
//         setPokemon(data)
//         setImage(data.sprites)
//       });
//     return () => {
//       //cleanup for when the component unmounts
//     };
//   }, [pokename]);

//   //console.log(image.front_default);

//   //const arrayOfObj = Object.entries(pokemon).map((e) => ( { [e[0]]: e[1] } ));
//   // console.log(arrayOfObj)
// // const newArrayOfObj = Object.values(arrayOfObj).map((e) => ( { [e[0]]: e[1] } ));
//   const handleForm = (e) => {
//     e.preventDefault()
//     console.log("hi")
//     let value = document.getElementById("input").value;
//     setPokename(value)
//   };

  return (
    <div className="App">
      <BrowserRouter>
      {/* <div className="App"> */}
        {/* Navbar */}
        {/* <a href = "/">Home</a> */}
        {/* <Link to= "/about">About</Link> */}

        {/* Display The books and the Descriptions */}
      {/* </div> */}
      <Routes>
        {/* Make a route for home when you first load a page */}
=        
          <Route exact path ="/" element = {<SignIn/>} />
          <Route exact path = "/info" element = {<Home/>} />

      </Routes>
    </BrowserRouter>
      {/* <div className="cards">

<Pokecard props={pokemon}/> */}


        {/* {Object.entries(pokemon).map((pokeObj) => {
          console.log(pokeObj)
        return <Pokecard props={pokeObj} 
        />
      })} */}
      {/* </div> */}
      {/* <img src={image.front_default} alt=""></img>
      <form onSubmit={handleForm}>
        <input id="input" type="text" placeholder="pokemon name"></input>
      </form> */}
      
    </div>
  );
}

export default App;


