import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm not actually much of a programming person... but I do enjoy a
              challenge once in a while!
              <br />
              <br />
              I've explored a variety of languages and frameworks, from the
              classics to the groundbreaking, like
              <b className="purple">
                {" "}
                Java, Javascript's React and Python's Tensorflow and PyTorch.{" "}
              </b>
              <br />
              <br />
              My field of interests include conducting research in{" "}
              <b className="purple">Cancer Biology and Oncology </b> and
              studying methods to becoming a
              <b className="purple">better, more humanistic physician.</b>
              <br />
              <br />
              I'm also passionate in anything related to personal development,
              whether it be through the arts by playing the <b className="purple">
                violin and piano
              </b>{" "}
              or pushing myself physically through
              <b className="purple">
                climbing, calistehnics, and running.
              </b>{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alexk22-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/alexander-kim-22-med"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
