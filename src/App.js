import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignIn from "./components/SignIn";
import { authentication } from "./firebase-config"


function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        {/* Make a route for home when you first load a page */}       
          <Route exact path ="/" element = {<SignIn/>} />
          <Route exact path = "/info" element = {<Home/>} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;


