import React from 'react';
import {Timeline , Events , UrlButton , ImageEvent} from '@merc/react-timeline';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import BMI from '../../assets/projects/bmi.jpg';

import HTML5 from "../../assets/skills/html-5.svg";
import CSS3 from "../../assets/skills/css3.svg";
import BOOTSTRAP from "../../assets/skills/bootstrap-4.svg";
import REACT from "../../assets/skills/react.svg";
import REACT_ROUTER from "../../assets/skills/react-router.svg";
import MATERIALUI from "../../assets/skills/material-ui-1.svg";
import REACT_BOOTSTRAP from "../../assets/skills/react-bootstrap.svg";
import STYLED_COMPONENTS from "../../assets/skills/styled-components.svg";
import NODE_JS from "../../assets/skills/nodejs.svg";
import EXPRESS from "../../assets/skills/express.svg";
import MONGODB from "../../assets/skills/mongodb.svg";
import POSTGRESQL from "../../assets/skills/postgresql.svg";
import GIT from "../../assets/skills/git-icon.svg";
import HEROKU from "../../assets/skills/heroku.svg";
import GITHUB_PAGES from "../../assets/skills/github.svg";
import JAVASCRIPT from "../../assets/skills/javascript.svg";

 
import "./index.css";

const Project = ()=>{
    return(
        <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: BMI Calculator */}
        <ImageEvent className='heading'
            date="01/10/2020"
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
          </Events>
          </Timeline>
        </div>
    )
}

export default Project;