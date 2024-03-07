import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bazra.jpg";
import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "bazra motors",
      description: "Design & Development \n states = > pending",
      imgUrl: projImg1,
      wlink: "https://bazra-group.netlify.app/",
    },
    {
      title: "admin dashboard ",
      description:
        "admin dashboard template\n for a client \n states => completed",
      imgUrl: projImg2,
      wlink: "https://adminpage-dashboard.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Expirience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">My-info</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                // id="slideInUp"
                // className={}
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      <div>
                        <h2>Projects</h2>
                        <p
                          style={{
                            margin: "30px",
                            textAlign: "center",
                          }}
                        >
                          Welcome to my projects showcase! As a passionate
                          Software Developer, I've had the privilege of working
                          on diverse and impactful projects that showcase my
                          skills and creativity.
                        </p>
                      </div>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="experience-section">
                      <h2 className="experience-heading">
                        Professional Experience
                      </h2>
                      <div className="experience-item-container">
                        <span className="experience-title">
                          Software Developer
                        </span>
                        <p className="experience-description">
                          - Spearheaded the development of a customer portal,
                          resulting in an increase in user engagement.
                          <br />
                          - Collaborated with cross-functional teams to deliver
                          high-quality software solutions within tight
                          deadlines.
                          <br />- Utilized JavaScript, React, and Node.js to
                          enhance the functionality of the company's flagship
                          product.
                        </p>
                      </div>
                      <div className="experience-item-container">
                        <span className="experience-title">Web Developer</span>
                        <p className="experience-description">
                          - Assisted in the design and implementation of
                          responsive websites for clients in diverse industries.
                          <br />
                          - Conducted code reviews, identified optimizations,
                          and contributed to the successful launch of client
                          websites.
                          <br />- Acquired hands-on experience with front-end
                          development tools.
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div class="mi-container">
                      <div class="left-column">
                        <h2>Personal Information</h2>
                        <div class="my-info-row">
                          <span class="my-info">Name</span>
                          <span class="my-info-data">
                            Fuad Mohammed Abagero
                          </span>
                        </div>
                        <div class="my-info-row">
                          <span class="my-info">Location</span>
                          <span class="my-info-data">
                            Ethiopia, Addis Ababa
                          </span>
                        </div>
                        <div class="my-info-row">
                          <span class="my-info">Born</span>
                          <span class="my-info-data">May 26, 2000</span>
                        </div>
                      </div>

                      <div class="right-column">
                        <h2>Education & Language</h2>
                        <div class="my-info-row">
                          <span class="my-info">Field of Study</span>
                          <span class="my-info-data">Computer Science</span>
                        </div>
                        <div class="my-info-row">
                          <span class="my-info">University</span>
                          <span class="my-info-data">Hawassa University</span>
                        </div>
                        <div class="my-info-row">
                          <span class="my-info">Language</span>
                          <span class="my-info-data">English, Amharic</span>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
