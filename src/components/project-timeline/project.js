import React from 'react';
import {Timeline , Events , UrlButton , ImageEvent} from '@merc/react-timeline';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import BMI from '../../assets/projects/bmi.jpg';
import BlackJack from '../../assets/projects/blackjack.png';
import PhotoFinder from '../../assets/projects/photofinder.png';
import Imgur from '../../assets/projects/imgur.png';
import Covid from '../../assets/projects/covidtracker.png';
import Crypto from '../../assets/projects/crypto.jpg';
import Netlify from '../../assets/skills/netlify.png';
import Gozzby from '../../assets/projects/gozzby.png';
import Insta from '../../assets/projects/insta.jpg';
import BookWorms from '../../assets/projects/bookworm.jpg';

import HTML5 from "../../assets/skills/html-5.svg";
import CSS3 from "../../assets/skills/css3.svg";
// import BOOTSTRAP from "../../assets/skills/bootstrap-4.svg";
import REACT from "../../assets/skills/react.svg";
import REACT_ROUTER from "../../assets/skills/react-router.svg";
import MATERIALUI from "../../assets/skills/material-ui-1.svg";
import REACT_BOOTSTRAP from "../../assets/skills/react-bootstrap.svg";
// import STYLED_COMPONENTS from "../../assets/skills/styled-components.svg";
import NODE_JS from "../../assets/skills/nodejs.svg";
import EXPRESS from "../../assets/skills/express.svg";
import MONGODB from "../../assets/skills/mongodb.svg";
// import POSTGRESQL from "../../assets/skills/postgresql.svg";
// import GIT from "../../assets/skills/git-icon.svg";
import HEROKU from "../../assets/skills/heroku.svg";
import GITHUB_PAGES from "../../assets/skills/github.svg";
import JAVASCRIPT from "../../assets/skills/javascript.svg";
import JWT from '../../assets/skills/jwt.png';
import POSTMAN from '../../assets/skills/postman.png';
import PASSPORT from '../../assets/skills/passport.png';

 
import "./index.css";

const Project = ()=>{
    return(
        <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: BMI Calculator */}
        <ImageEvent className='heading'
            date=""
            className="text-center"
            text="BMI Calculator"
            src={BMI}
            alt="BMI"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A simple javascript project using html css and some basic math problems.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Takes the input of Weight & Height</li>
                          <li>Calculates the BMI using simple math formula</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                          <span className="p-2">
                            <Image
                              src={GITHUB_PAGES}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Github
                          </span>
                        </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://ausi1997.github.io/BMI---Calculator/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ausi1997/BMI---Calculator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {////////////////////////////////////////////////
          /* Project: BMI Calculator */}
        <ImageEvent className='heading'
        date=""
        className="text-center"
        text="BlackJack"
        src={BlackJack}
        alt="BMI"
      >
        <div className="d-flex justify-content-between flex-column mt-1">
          <div>
            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className="text-left">
                  <Card.Body>
                    <strong>Description:</strong> A simple javascript project using html css , some card logics & functional programming.

                    <hr />
                    <strong>Features:</strong>
                    <ul className="list-styles pt-1">
                      <li>Multiplayer option</li>
                      <li>CSS Animation</li>
                      <li>Respoisive Design</li>
                    </ul>
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                      <li>
                        <span className="p-2">
                          <Image
                            src={HTML5}
                            alt="HTML 5"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          HTML5
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={CSS3}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          CSS3
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={JAVASCRIPT}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          JavaScript
                        </span>
                      </li>
                      <li>
                      <span className="p-2">
                        <Image
                          src={GITHUB_PAGES}
                          alt="React"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Github
                      </span>
                    </li>
                      
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="d-flex justify-content-between flex-nowrap text-center">
            <UrlButton
              href="https://ausi1997.github.io/Blackjack/"
              target="_blank"
            >
              SEE LIVE
            </UrlButton>
            <UrlButton
              href="https://github.com/ausi1997/Blackjack"
              target="_blank"
            >
              SOURCE CODE
            </UrlButton>
          </div>
        </div>
      </ImageEvent>

{// Project: BMI Calculator //
///////////////////////          
}
<ImageEvent className='heading'
date=""
className="text-center"
text="CryptoMatter"
src={Crypto}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong> A simple React project for tracking the price of crypto currencies in INR .

            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Displaying the price of crypto on a single page application</li>
              <li>Fetching the data from external API using Axios</li>
              <li>You can also search a crypto by its name</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={HTML5}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  HTML5
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={CSS3}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  CSS3
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={JAVASCRIPT}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  JavaScript
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={REACT}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  React
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={HEROKU}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                Heroku
              </span>
            </li>
              
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href="https://cryptomatter-ausi.herokuapp.com/"
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/CryptoMatter"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>

{/* ///////////////////////////////////
//////////////////////////////Project: BMI Calculator */}


<ImageEvent className='heading'
date=""
className="text-center"
text="Covid-Tracker"
src={Covid}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong> A Single page react application to track the covid-19 cases globally and country wise.

            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Track the active cases , deaths , recovery .... of covid-19</li>
              <li>Fetching the data from external API using axios</li>
              <li>Track the cases according to country wise</li>
              <li>Used chart.js to represent the cases on graph</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={HTML5}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  HTML5
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={CSS3}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  CSS3
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={JAVASCRIPT}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  JavaScript
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={REACT}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                React
              </span>
            </li>
            <li>
            <span className="p-2">
              <Image
                src={MATERIALUI}
                alt="React"
                rounded
                className="image-style1 m-1"
              ></Image>{" "}
              MaterialUi
            </span>
          </li>
          <li>
          <span className="p-2">
            <Image
              src={HEROKU}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            Heroku
          </span>
        </li>              
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href="https://covid-tracker-ausi.herokuapp.com/"
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/covid-tracker"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>

{
////////////////////////////////////////
//////////////    
}
<ImageEvent className='heading'
date=""
className="text-center"
text="PhotoFinder"
src={PhotoFinder}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong>Developed Single page react application to find the photos using external api 
            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Fetching the data from external API using Axios </li>
              <li>Displaying random images</li>
              <li>Searching images by title name</li>
              <li>View fullsize of image</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={HTML5}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  HTML5
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={CSS3}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  CSS3
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={JAVASCRIPT}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  JavaScript
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={REACT}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                React
              </span>
            </li>
            <li>
            <span className="p-2">
              <Image
                src={MATERIALUI}
                alt="React"
                rounded
                className="image-style1 m-1"
              ></Image>{" "}
              MaterialUi
            </span>
          </li>
          <li>
          <span className="p-2">
            <Image
              src={GITHUB_PAGES}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            Github
          </span>
        </li>              
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href="https://ausi1997.github.io/FotoFinder/"
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/FotoFinder"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>

{///////////////////////////////////////
////////////////////////
}


<ImageEvent className='heading'
date=""
className="text-center"
text="Imgur-Clone"
src={Imgur}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong> Developed an Image hosting app clone (Imgur-clone) using React js and external API.
            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Fetching the data from external API using Axios </li>
              <li>Displaying random images & search images</li>
              <li>Login & Signup</li>
              <li>Upload your images</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={HTML5}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  HTML5
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={CSS3}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  CSS3
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={JAVASCRIPT}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  JavaScript
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={REACT}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                React
              </span>
            </li>
            <li>
            <span className="p-2">
              <Image
                src={REACT_ROUTER}
                alt="React"
                rounded
                className="image-style1 m-1"
              ></Image>{" "}
              React Router
            </span>
          </li>
          <li>
          <span className="p-2">
            <Image
              src={Netlify}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            Netlify
          </span>
        </li>              
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href="https://agitated-mahavira-db35fe.netlify.app/"
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/imgur"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>

{///////////////////////////////////////
////////////////////////
}


<ImageEvent className='heading'
date=""
className="text-center"
text="Gozzby"
src={Gozzby}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong> Developed the backend part of some features of an e-commerce app
            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Created backend api for signup & login with JWT authentication</li>
              <li>Created api for uploading products with their belonging categories</li>
              <li>Cart feature for every user</li>
              <li>Authenticated Routes</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={NODE_JS}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  Node js
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={EXPRESS}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  Express js
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={MONGODB}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  MongoDB
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={JAVASCRIPT}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                JavaScript
              </span>
            </li>
            <li>
            <span className="p-2">
              <Image
                src={JWT}
                alt="React"
                rounded
                className="image-style1 m-1"
              ></Image>{" "}
              Jwt
            </span>
          </li>
          <li>
          <span className="p-2">
            <Image
              src={POSTMAN}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            Postman
          </span>
        </li>              
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href=""
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/E-Commerce"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>


{///////////////////////////////////////
////////////////////////
}


<ImageEvent className='heading'
date=""
className="text-center"
text="Instagram-Clone"
src={Insta}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong> Developed a clone of Instagram App which has some features of that built using node js , express js , mongodb , react js.Basically it is a MERN Stack Application
            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Created backend api for signup & login with JWT authentication</li>
              <li>Logout your account</li>
              <li>User profile feature </li>
              <li>Following & Followers feature</li>
              <li>Uploading post feature</li>
              <li>User timeline feature</li>
              <li>Like Unlike & Comments on post</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={NODE_JS}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  Node js
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={EXPRESS}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  Express js
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={MONGODB}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  MongoDB
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={JAVASCRIPT}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                JavaScript
              </span>
            </li>
            <li>
            <span className="p-2">
              <Image
                src={JWT}
                alt="React"
                rounded
                className="image-style1 m-1"
              ></Image>{" "}
              Jwt
            </span>
          </li>
          <li>
          <span className="p-2">
            <Image
              src={POSTMAN}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            Postman
          </span>
        </li>  
        <li>
          <span className="p-2">
            <Image
              src={HTML5}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            HTML
          </span>
        </li> 
        <li>
          <span className="p-2">
            <Image
              src={CSS3}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            CSS
          </span>
        </li>
        <li>
          <span className="p-2">
            <Image
              src={REACT}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            React
          </span>
        </li>
        <li>
          <span className="p-2">
            <Image
              src={REACT_BOOTSTRAP}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            React Bootstrap
          </span>
        </li>                           
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href=""
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/Instagram-Stories"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>


{///////////////////////////////////////
////////////////////////
}


<ImageEvent className='heading'
date=""
className="text-center"
text="BookWorms"
src={BookWorms}
alt="BMI"
>
<div className="d-flex justify-content-between flex-column mt-1">
  <div>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-2 text-center accordian-main"
        >
          PROJECT DETAILS
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0" className="text-left">
          <Card.Body>
            <strong>Description:</strong> Built a platform where one student can share or post all his study material (Books,notes etc) and the needy student can easily find out their needfull and can buy from the owner (OLX model).
            <hr />
            <strong>Features:</strong>
            <ul className="list-styles pt-1">
              <li>Created backend api for signup & login with passport js authentication</li>
              <li>Logout your account</li>
              <li>User profile feature </li>
              <li>Passport js session authentication</li>
              <li>Uploading Ad post</li>
              <li>Add to wishlist feature</li>
            </ul>
            <hr />
            <strong>Tech used:</strong>
            <ul>
              <li>
                <span className="p-2">
                  <Image
                    src={NODE_JS}
                    alt="HTML 5"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  Node js
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={EXPRESS}
                    alt="CSS 3"
                    rounded
                    className="image-style m-1"
                  ></Image>{" "}
                  Express js
                </span>
              </li>
              <li>
                <span className="p-2">
                  <Image
                    src={MONGODB}
                    alt="React"
                    rounded
                    className="image-style1 m-1"
                  ></Image>{" "}
                  MongoDB
                </span>
              </li>
              <li>
              <span className="p-2">
                <Image
                  src={JAVASCRIPT}
                  alt="React"
                  rounded
                  className="image-style1 m-1"
                ></Image>{" "}
                JavaScript
              </span>
            </li>
            <li>
            <span className="p-2">
              <Image
                src={PASSPORT}
                alt=""
                rounded
                className="image-style1 m-1"
              ></Image>{" "}
              Passport Js
            </span>
          </li>
          <li>
          <span className="p-2">
            <Image
              src={POSTMAN}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            Postman
          </span>
        </li>  
        <li>
          <span className="p-2">
            <Image
              src={HTML5}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            HTML
          </span>
        </li> 
        <li>
          <span className="p-2">
            <Image
              src={CSS3}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            CSS
          </span>
        </li>
        <li>
          <span className="p-2">
            <Image
              src={REACT}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            React
          </span>
        </li>
        <li>
          <span className="p-2">
            <Image
              src={REACT_BOOTSTRAP}
              alt="React"
              rounded
              className="image-style1 m-1"
            ></Image>{" "}
            React Bootstrap
          </span>
        </li>        
        <li>
        <span className="p-2">
          <Image
            src={MATERIALUI}
            alt="React"
            rounded
            className="image-style1 m-1"
          ></Image>{" "}
          Material Ui
        </span>
      </li>                           
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  <div className="d-flex justify-content-between flex-nowrap text-center">
    <UrlButton
      href=""
      target="_blank"
    >
      SEE LIVE
    </UrlButton>
    <UrlButton
      href="https://github.com/ausi1997/BookWorms-Capstone"
      target="_blank"
    >
      SOURCE CODE
    </UrlButton>
  </div>
</div>
</ImageEvent>



          </Events>
          </Timeline>
        </div>
    )
}

export default Project;