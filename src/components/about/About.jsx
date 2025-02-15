import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2> About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="ABOUT ME" className="about__img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>-</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>21+ Completed</small>
            </article>
          </div>

          {/* <p>
            I am Kamlesh Rathod, a passionate and results-driven Full Stack
            Developer with expertise in the MERN stack, React Native, and modern
            web technologies. With a strong foundation in backend and frontend
            development, I have built and deployed dynamic web applications,
            including a doctor booking platform and an e-commerce website.
            Currently working as a Web Developer at Apex Web Infotech, I
            specialize in crafting scalable solutions using MongoDB, Express.js,
            React.js, and Node.js. I have experience in payment gateway
            integration (Razorpay), real-time data handling (Socket.IO), and
            responsive UI design with Tailwind CSS and Bootstrap. I hold a
            Master of Computer Applications (MCA) from Silver Oak University and
            a Bachelor of Commerce (BCom) from Gujarat University. My journey in
            web development is driven by a passion for problem-solving,
            innovation, and continuous learning. Let's build something amazing
            together! 📧 Email: kamleshrathod2092000@gmail.com 🔗 LinkedIn:
            [linkedin.com/in/whoisbunny](https://www.linkedin.com/in/whoisbunny)
            🌐 Portfolio:
            [whoisbunny.netlify.app](https://whoisbunny.netlify.app)
            
          </p> */}
          <p>
            I am Kamlesh Rathod, a passionate Full Stack Developer specializing
            in the MERN stack (MongoDB, Express.js, React.js, Node.js) and React
            Native. With experience in building scalable web and mobile
            applications, I have developed projects like a doctor booking
            system, an e-commerce platform, and a cooperative credit society
            software. Currently, I work as a Web Developer at Apex Web Infotech,
            where I contribute to financial software solutions. My expertise
            includes payment gateway integration (Razorpay), real-time data
            handling (Socket.IO), and responsive UI design with Tailwind CSS and
            Bootstrap. I hold an MCA from Silver Oak University. With strong problem-solving skills and a
            commitment to learning, I aim to build innovative applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
