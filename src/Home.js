import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import ubclogo from "./Images/UBC-logo-2018-narrowsig-white-rgb72.png";
import "./portfolio.css";
import { Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import cst from "./Images/CST.jpg";
import ubc from "./Images/UBC.png";
import pfp from "./Images/pfp.jpg";
// import { link } from "fs";


function Home() {
  const skills = [
    "PHP", "Java", "Python", "HTML", "CSS", "Spring",
    "JavaScript", "React.js", "Node.js", "Bootstrap", "REST", "AJAX", "JSON", "XML",
    "Docker", "GitHub", "VS Code", "Slack", "Microsoft Suite", "Microsoft Teams", "Eclipse",
    "MySQL", "MongoDB", "NoSQL"
  ];

  const experiences = [
    {
      company: "Central Square Technologies",
      role: "SOFTWARE DEVELOPER CO-OP",
      date: "September 2024 – Present",
      location: "Kelowna, BC",
      description: [
        "Effectively participated and contributed to the team’s Agile development cycle",
        "Independently set clear and well-defined goals, ensuring alignment with priorities and creating action plans to achieve them.",
        "Actively contributed to a variety of support requests, funded development projects, and product development tasks.",
        "Effectively and actively communicated with other members of the development team."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "UNDERGRADUATE RESEARCH ASSISTANT: Project Coordinator",
      date: "February 2024 – July 2024",
      location: "Kelowna, BC",
      description: [
        "Coordinated and planned team meetings with a team of 7 people",
        "Designed, distributed, and managed a survey to understand the perspectives of the student demographic.",
        "Coordinated and planned focus groups with survey participants to get a better understanding of their perspectives on the project topic.",
        "Assisted in preparing and processing hiring documents for project team members.",
        "Liaised with staff to plan and design project website."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "UNDERGRADUATE RESEARCH ASSISTANT",
      date: "June 2023 – April 2024",
      location: "Kelowna, BC",
      description: [
        "Using the MERN stack, developed a sustainability-driven shopping list application to promote healthy and financially conscious shopping habits.",
        "Independently conducted application functionality testing on 100+ applications for a published academic paper."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "SUMMER STUDENT: Research Assistant",
      date: "May 2023 – August 2023",
      location: "Kelowna, BC",
      description: [
        "Aided in the execution of a weekend-long symposium with a human-machine interaction focus.",
        "Assisted in ballistics-related research.",
        "Assisted in grant scanning for research projects.",
        "Developed and conducted a 3D Scanning and Printing Awareness project on the UBCO campus."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "ADMINISTRATIVE ASSISTANT",
      date: "June 2024 – August 2024",
      location: "Kelowna, BC",
      description: [
        "Provided support to 20+ students daily on various academic planning needs.",
        "Scheduled 50+ students meeting with advisors daily.",
        "Managed and organized daily appointment schedules using Excel",
        "Empathetically fielded student queries to assist with their issues or direct them to appropriate resource."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "STUDENT AMBASSADOR",
      date: "May 2024 – Present",
      location: "Kelowna, BC",
      description: [
        "Guided groups of 10+ prospective students on campus tours.",
        "Composed and presented a pre-tour presentation to 10+ tour guests.",
        "Empathetically and actively listened and fielded tour guests’ inquiries.",
        "Assisted Student recruitment staff in recruitment and advising events."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "DESTINATION UBC COORDINATOR",
      date: "February 2023 – May 2023 / March 2024 – May 2024",
      location: "Kelowna, BC",
      description: [
        "Planned and executed a weekend-long event for 300+ students.",
        "Managed the Social media platform and provided aid in the student registration process.",
        "Interviewed and hired 50 student staff to serve as peer leaders for the event.",
        "Created and promoted advertisements and social media posts before and during the event."
      ]
    },
    {
      company: "The University of British Columbia",
      role: "RESIDENCE ADVISOR",
      date: "August 2022 – April 2024",
      location: "Kelowna, BC",
      description: [
        "Promoted a safe and secure environment for 50+ students.",
        "Organized weekly programs and provided support to residents and residence life staff.",
        "Supported the development of resident initiatives."
      ]
    }];
    const projects = [
      {
        name: "THE LEARNING LAYERS",
        date: "January 2024 – April 2024",
        description: [
          "Developed the front end for this e-learning platform with a focus on the teacher-side functionality.",
          "Aimed to create minimalistic, yet visually appealing pages to improve the user experience for teachers using the application.",
          "Developed using the MERN stack in an Agile development system."
        ],
        technologies: ["React.js", "Node.js", "Bootstrap", "CSS", "Jest", "Agile Development"],
        link: "https://github.com/dabby04/TheLearningLayers"
      },
    {
      name: "ZIKI",
      date: "January 2024 – April 2024",
      description: [
        "A platform where Gen Z can come and engage in thought-provoking and meaningful conversation on topics that matter to Gen Z.",
        "Developed using the LAMP stack and elevated the visual appeal using Bootstrap."
      ],
      technologies: ["JavaScript", "PHP", "HTML", "Bootstrap", "MySQL", "CSS"],
      link: "https://github.com/dabby04/Ziki"
    }
  ];

  return (
    <>
      <title>Peter Okpoga Idoko</title>
      <body data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabIndex="0">
        
        <Navbar id="navbar-example2" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Peter Okpoga Idoko</Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#scrollspyAboutMe">About Me</Nav.Link>
              <Nav.Link href="#scrollspySkills">Skills</Nav.Link>
              <Nav.Link href="#scrollspyExperience">Experience</Nav.Link>
              <Nav.Link href="#scrollspyEducation">Education</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              
            </Nav>
          </Container>
          <Form id="search" inline>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form>
              </Container>
        </Navbar>
        <Container id="home">
        <Container id="introText">
          <TypeAnimation
            sequence={['Hi, My name is Peter Okpoga Idoko... Welcome to my Portfolio']}
            wrapper="h1"
            repeat={true}
            repeatDelay={10000}
            typeSpeed={50}
            style={{justifySelf: "center"}}
          />
        </Container>
        <Container id="scrollspyAboutMe" className="sections">
          <h1>About Me</h1>
          <Image src={pfp} alt="Profile Picture" id="pfp"/>
          <p>
            I am a software developer with a passion for creating innovative solutions to everyday problems. I have experience in web development, mobile development, and cloud computing. I am particularly interested in the intersection between business management and software development which has led me to various entrepreneurial ventures. I am always looking for new challenges and opportunities to learn and grow.
          </p>
          
        </Container>
        
        <Container id="scrollspyEducation" className="sections">
          <h1>Education</h1>
          <Image src={ubclogo} alt="UBC Logo" id="ubclogo"/>
            {/* <h2>University of British Columbia</h2> */}
            {/* <Table>
                <tr>
                    <td><h4>Major: Computer Science</h4></td>
                    <td><h4>Cumulative Average: 84.2%</h4></td>
                </tr>
                <tr>
                    <td><h4>Minor: Management</h4></td>
                    <td><h4>Expected Graduation: December 2026</h4></td>
                </tr>
            </Table> */}
            <h4>Major: Computer Science</h4>
            <h4>Minor: Management</h4>
            <h4>Cumulative Average: 84.2%</h4>
            {/* <h4>Expected Graduation: December 2026</h4> */}
        </Container>
        
        <Container id="scrollspyExperience" className="sections">
          <h1>Experience</h1>
          <div className="experiences">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <Card.Img variant="left" src={experience.company==='Central Square Technologies'?cst:ubc} alt={experience.company} className="joblogo"/>
              <Card.Body >
                <Card.Title>{experience.company}</Card.Title>
                <h3>{experience.role}</h3>
                <p>{experience.date} - {experience.location}</p>
                <ul>
                    {experience.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>
          ))}</div>
        </Container>
        <Container id="scrollspySkills" className="sections">
          <h1>Skills</h1>
          <ul>
            {skills.map(skill => (
              <li className="skill" key={skill}>{skill}</li>
            ))}
          </ul>
        </Container>
        <Container id="scrollspyProjects" className="sections">
          <h1>Projects</h1>
            {projects.map(project => (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Card style={{ width: '25rem' }} key={project.name} className="projects">
                
                  <Card.Body href={project.link} target="_blank" rel="noopener noreferrer">
                    <Card.Title>{project.name}</Card.Title>
                    <h6>{project.date}</h6>
                    <ul>
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <ul>
                      {project.technologies && project.technologies.map((tech, i) => (
                        <li key={i} className="technologies">{tech}</li>
                      ))}
                    </ul>
                    
                  </Card.Body>
                  
              </Card>
              </a>
            ))}
        </Container>
        </Container>
        <footer>
          <p>© 2025 Peter Okpoga Idoko. All rights reserved.</p>
        </footer>
      </body>
    </>
  );
}

export default Home;