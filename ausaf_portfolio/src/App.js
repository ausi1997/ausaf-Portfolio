import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/home/home.";
import Title from "./components/title/title";
import AboutMe from "./components/about/about";
import Skills from "./components/skills/skills";

import Container from "react-bootstrap/Container";
//import {Parallax , Background} from "react-parallax";
//import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide"
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
    <NavBar></NavBar>
    <Home></Home>
    <Title></Title>
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <AboutMe></AboutMe>
        </Slide>
      </Container>
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
