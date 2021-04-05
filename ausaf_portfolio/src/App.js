import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/home/home.";
import Title from "./components/title/title";
import AboutMe from "./components/about/about";

//import Container from "react-bootstrap/Container";
//import {Parallax , Background} from "react-parallax";
//import Fade from "react-reveal/Fade";
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
    <NavBar></NavBar>
    <Home></Home>
    <Title></Title>
    <AboutMe></AboutMe> 
    
    </div>
  );
}

export default App;
