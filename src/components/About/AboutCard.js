import React from "react";
import Card from "react-bootstrap/Card";
import { IoCodeWorkingSharp } from "react-icons/io5";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple"> Alexander Kim, </span>
            from <span className="purple"> Chicago, Illinois.</span>
            <br />
            <br />
            I am currently pursuing a <strong className="purple">cancer research internship</strong> at <strong className="purple">Northwestern Feinberg School of Medicine.</strong>
            <br />
            <br />
            I am also a Stamps Scholar at the <strong className="purple">University of Illinois Urbana-Champaign</strong> studying <strong className="purple">Chemistry</strong> and <strong className="purple">Molecular/Cellular Biology</strong>.
            <br />
            <br />
            Apart from studying the sciences, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoCodeWorkingSharp /> Playing the violin!
            </li>
            <li className="about-activity">
              <IoCodeWorkingSharp /> All things physical exercise (climbing, calisthenics, running)!
            </li>
            <li className="about-activity">
              <IoCodeWorkingSharp /> Serving my community!
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
