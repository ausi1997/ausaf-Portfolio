import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import Logo from "../../assets/companyLogo/pvg logo.png";
import './index.css';

const Experience =()=>{
    return(
    <div>
    <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
    <Jumbotron className="jumbo-style">
    <Container>
    <Tilt options={{ max: 25 }}>
    <Card>
    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
      <Card.Img variant="top" className="img-resize" src={Logo} alt="Accenture logo" />
    </Card.Header>
    <Card.Body className="d-flex justify-content-center flex-column">
      <div>
        <Card.Title className="text-center">IT Network Executive</Card.Title>
      </div>
      <div>
        <Card.Text className="text-center style">
          <strong className="body-title-style ">Network Engineer</strong>
          <br />
          <strong>Duration:</strong> August 2019 - August 2020
          <br/>
          <strong> Description </strong>
          <ul className="text-left">
            <li><strong>Handling </strong>Project Work & Client Requests.</li>
            <li><strong>On Site</strong> Passive Networking Work 
            </li>
            <li><strong>Installation & Configuration </strong> of L2 switch and IP Cameras
            </li>
            <li><strong>Site</strong> Surveing & Material Procurement </li>
            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

          </ul>
          
          
        </Card.Text>
      </div>
    </Card.Body>
  </Card>
    </Tilt>
    </Container>
    </Jumbotron>

    </div>
    )
}

export default Experience;