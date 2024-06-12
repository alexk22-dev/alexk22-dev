import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cdh1 from "../../Assets/Projects/cdh1.png";
import salifort_motors from "../../Assets/Projects/salifort_motors.png";
import cancer from "../../Assets/Projects/cancer.jpg";
import romanza from "../../Assets/Projects/romanza.png"
import danzas from "/Users/alexkim/Downloads/Portfolio-master/src/Assets/Projects/danzas.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, with a diverse set of works ranging from research papers to violin albums.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salifort_motors}
              isBlog={false}
              title="Salifort Motors Capstone Project"
              description="Capstone Project for the Google Advanced Data Analytics Specialization. This project showcases the different steps of the PACE cycle (Plan, Analyze, Construct, Execute), demonstrates proficiency in Python libraries (numpy, pandas, scikitlearn, seaborn), displays relevant data visualizations, and includes two approaches to a binary classification problem."
              ghLink="https://github.com/alexk22-dev/salifort-motors"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdh1}
              isBlog={false}
              title="Bioinformatics Paper on CDH1 Gene"
              description="Conducted a bioinformatic analysis of CDH1 and its corresponding protein E-cadherin in breast carcinoma using web-based portals such as cBioPortal and STRING db, genomic/proteomic databases such as DepMap and UALCAN, and statistical tests using R. Statistically significant results were reported and opportunities for further research were articulated."
              ghLink="https://github.com/alexk22-dev/cdh1-paper"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Cancer Epigenetics Capstone Project"
              description="Capstone Project for the Epigenetics: Control of Gene Expression course by the University of Melbourne covering various topics in cancer epigenetics. Analysis of DNA methylation, imprinting, and drugs with epigenomic effects were investigated. The project was peer-graded by several other course-takers and received a proficiency grade of an A."
              ghLink="https://github.com/alexk22-dev/cancer-epigenomics"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={romanza}
              isBlog={false}
              title="Romanza - A Violin Album"
              description="Original album featuring romantic violin works by Henryk Wieniawski, Ludwig van Beethoven, Antonín Dvořák, and Fritz Kreisler. All works are performed without accompaniment."
              ghLink=""
              demoLink="https://soundcloud.com/discover"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={danzas}
              isBlog={false}
              title="Danzas - A Violin Album"
              description="Original album featuring Spanish dances for the violin by Pablo Sarasate. All works are performed without accompaniment."
              ghLink=""
              demoLink="https://soundcloud.com/discover"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
