import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple"> Alexander Kim </span>
            from <span className="purple"> Chicago, Illinois.</span>
            <br />
            I am currently pursuing a cancer research internship at Northwestern Feinberg School of Medicine.
            <br />
            I am also a Stamps Scholar at the University of Illinois Urbana-Champaign studying Chemistry and Molecular Cellular Biology!
            Mesra.
            <br />
            <br />
            Apart from studying the sciences, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the violin!
            </li>
            <li className="about-activity">
              <ImPointRight /> All things physical exercise (climbing, calisthenics, running)!
            </li>
            <li className="about-activity">
              <ImPointRight /> Serving my community!
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
