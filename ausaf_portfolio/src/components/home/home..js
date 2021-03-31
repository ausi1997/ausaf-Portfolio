import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Theme1 from "../../assets/theme/theme 1.jpg";
import Theme2 from "../../assets/theme/theme 2.png";
import Theme3 from "../../assets/theme/theme 3.png";
 
import "./index.css";

const Home = ()=>{
    return(
    <div id="home">
    <Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={Theme1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={Theme2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={Theme3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
    )
}


export default Home;