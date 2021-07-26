import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/profile/profile.jpg";
import Button from "react-bootstrap/Button";

import "./index.css";

const AboutMe = ()=>{
    return(
        <div id="about" className="about">
        <h1 className="pt-3 text-center font-details pb-3" >About Me</h1>
<Container>
<Row className="pt-3 pb-5 align-items-center">
<Column xs={12} md={6}>
<Row className="justify-content-center mb-2 mr-2">
<Image className="profile justify-content-end" src={Profile} alt="loadinggg...." thumbnail>
</Image>
</Row>
</Column>
<Column xs={12} md={6}>
<Row className="align-items-start p-2 my-details rounded">
Hi there! I am <strong>&nbsp;Ausaf Ahmad</strong>
<br /> I am a MERN Stack Web Developer with React.js, Express.js, Node.js, and Mongo DB as my tech stack.
<br />
I have done my Graduation (B.Tech) with specialization in Electrical & Electronics in 2019.
<br />
After that I have served as Networking Engineer in a IT Infrastructure Organization for 1 year.
<br />
Currently I am Pursuing Product Engineering from School of Accelerated Learning (SOAL) and building up my skills by learning new tech. stack  
<br />Eager to join a Creative , Problem Solving team. Ability to learn and implement new technologies quickly . Passionate about implementing & launching new products.
<br /> <br />
</Row>
<Row>
<Column className="d-flex justify-content-center flex-wrap">
<div>
<a href="#contact">
<Button className="m-2" variant="outline-primary">Let's Talk</Button>
</a>
</div>
<div>
<a href="https://drive.google.com/file/d/1cY7BqpNFOic00Zrn_K7UwwH6Ln6w8RMN/view?usp=drivesdk">
<Button className="m-2" variant="outline-success">My Resume</Button>
</a>
</div>
<div>
<a href="https://github.com/ausi1997">
<Button className="m-2" variant="outline-dark">GitHub</Button>
</a>
</div>
<div>
<a href="https://www.linkedin.com/in/ausaf-ahmad-02403917a">
<Button className="m-2" variant="outline-info">Linkd In</Button>
</a>
</div>
</Column>
</Row>
</Column>
</Row>
</Container>
        </div>
    )
}

export default AboutMe;