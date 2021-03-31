import React from "react";
import styled from "styled-components";
import TypeWriter from "typewriter-effect";
const TitleMessage  = styled.h1`
position: absolute;
width: 100%;
top: 22rem;
z-index: 1;
margin-top: -125px;
text-align: center;
strong {
  font-size: 1.25em;
}
div {
  color : white;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 100;
  letter-spacing: 7px;
  .main {
    font-size: 50px;
  }
  .sub {
    font-size: 27px;
    letter-spacing: 2px;
  }
}
`;

const Title = ()=>{
    return(
        <div>
        <TitleMessage>
        <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Ausaf Ahmad</strong>
          </span>
        </div>
        <div className="sub">
          <TypeWriter
            options={{
              strings: ["Web Developer", "Learner","Open to Work"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
        </TitleMessage>
        </div>
    )
}

export default Title;