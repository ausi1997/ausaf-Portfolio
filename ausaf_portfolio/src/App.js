import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/home/home.";
import Title from "./components/title/title";
import AboutMe from "./components/about/about";
function App() {
  return (
    <div>
    <NavBar></NavBar>
    <Home></Home>
    <Title></Title>
    <AboutMe></AboutMe>
    </div>
  );
}

export default App;
