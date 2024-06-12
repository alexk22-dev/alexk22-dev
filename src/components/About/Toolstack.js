import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGooglecalendar,
  SiMacos,
  SiTodoist,
  SiGooglecolab,
  SiMicrosoftoutlook,
  SiMicrosoftteams,
  SiRstudio,
  SiOverleaf
} from "react-icons/si";
import { 
  FaStackOverflow,
 } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecalendar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTodoist />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaStackOverflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOverleaf />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoutlook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>
    </Row>
  );
}

export default Toolstack;
