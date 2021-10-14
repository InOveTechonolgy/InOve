import React from "react";
import "./Home.css";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import triangle from "../../assets/imgs/triangle_illsutration.png";
import arrow_right from "../../assets/imgs/arrow_right.png";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard";
import Footer from "../../components/Footer";
import { FaReact, FaHtml5, FaJs, FaCss3 } from "react-icons/fa";
import figma from "../../assets/imgs/figma.svg";
function Home() {
  const [isToogle, setToggled] = React.useState(false);

  const handleToggle = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("dropdown-container")) {
      setToggled(!isToogle);
    } else {
      setToggled(false);
    }
  };

  return (
    <div className="home" onClick={handleToggle}>
      <div className="dark-hero" id="home">
        <Container>
          <Navbar handleToggle={handleToggle} isToogle={isToogle} />
          <motion.div
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: "spring", stiffness: 100 },
              y: { type: "spring", stiffness: -50 },
              opacity: 0,
              default: { duration: 2 },
            }}
            div
            className="hero__top__container"
          >
            <h1>We build beautiful and reliable web & mobile solutions</h1>
            <p>
              We strongly believe that communication, trust and transparency are
              the essential elements of successful business relationship. Ready
              for the journey?
            </p>
            <div className="hero__buttons">
              <a href="#more" className="btn btn-primary">
                Learn more.
              </a>
              <a href="#project" className="btn btn-secondary">
                Our Projects <img src={arrow_right} alt="arrow_right" />
              </a>
            </div>
          </motion.div>

          <div className="services__header" id="services">
            <h3>Our Services</h3>
            <p>
              We feel very strong about our skills when it comes to planning,
              designing and coding applications. Here is what we love to do!
            </p>
          </div>

          <div className="services__cards">
            <ServiceCard
              title="Business & Product Concept"
              subtitle="Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
            />
            <ServiceCard
              title="Web & Mobile Development"
              subtitle="Plan, develop and test high-quality web applications using AngularJS, NodeJS, JavaScript, Typescript, HTMLS and SASS/ CSS3 frameworks and native mobile languages."
            />
            <ServiceCard
              title="UX & UI Design"
              subtitle="Sketch information architecture and simple mock-ups, convert them into
clickable prototypes and finish with usable
interface designs to deliver a good and,
reliable user experience"
            />
          </div>
        </Container>
        <img
          src={triangle}
          alt="triangle-illustration"
          className="triangle-illustration"
        />
      </div>

      <div className="technology__section" id="technology">
        <Container>
          <div className="technology__body">
            <h2>We use cutting edge technology</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
              ullamcorper lacus, fusce sed orci nibh porttitor adipiscing
              ullamcorper. Imperdiet porttitor netus magna scelerisque etiam.
              Sed amet auctor egestas ante ipsum. Amet ornare a vulputate amet,
              urna, in nibh semper non.
            </p>
            <div className="technology__icons">
              <div>
                <FaReact />
              </div>
              <div>
                <FaHtml5 />
              </div>
              <div>
                <FaCss3 />
              </div>
              <div>
                <FaJs />
              </div>
              <div>
                <img src={figma} alt="" />
              </div>
            </div>
          </div>
        </Container>
        {/* <img src={boxes} alt="boxes"  className="boxes"/> */}
      </div>

      <div className="team-section" id="about">
        <h4>OUR TEAM</h4>
        <div className="team-persons">
          <div className="first-person">
            <div className="first-person-card">
              <div className="card-wrapper">
                <div className="card-avatar">
                  <img
                    src={
                      "https://avatars.dicebear.com/api/avataaars/sumit_bighaniya.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="card-meta">
                  <div className="card-author">Sumit</div>
                  <div className="card-user-position">
                    FullStack Web Developer
                  </div>
                  <div className="card-links">
                    <a href="#facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#insta">
                      <FaInstagram />
                    </a>
                    <a href="#github">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://avatars.dicebear.com/api/avataaars/sumit_bighaniya.svg"
              alt=""
            />
          </div>
          <div className="second-person">
            <div className="second-person-card">
              <div className="card-wrapper">
                <div className="card-avatar">
                  <img
                    src="https://avatars.dicebear.com/api/avataaars/abhay_gudihal.svg"
                    alt=""
                  />
                </div>
                <div className="card-meta">
                  <div className="card-author">Abhay Gudihal</div>
                  <div className="card-user-position">Web Developer</div>
                  <div className="card-links">
                    <a href="#facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#insta">
                      <FaInstagram />
                    </a>
                    <a href="#github">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://avatars.dicebear.com/api/avataaars/abhay_gudihal.svg"
              alt=""
            />
          </div>
          <div className="third-person">
            <div className="third-person-card">
              <div className="card-wrapper">
                <div className="card-avatar">
                  <img
                    src="https://avatars.dicebear.com/api/avataaars/shailesh.svg"
                    alt=""
                  />
                </div>
                <div className="card-meta">
                  <div className="card-author">Shailesh Kamble</div>
                  <div className="card-user-position">
                    Founder,Mobile Application Developer
                  </div>
                  <div className="card-links">
                    <a href="#facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#insta">
                      <FaInstagram />
                    </a>
                    <a href="#github">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://avatars.dicebear.com/api/avataaars/shailesh.svg"
              alt=""
            />
          </div>
          <div className="fourth-person">
            <div className="fourth-person-card">
              <div className="card-wrapper">
                <div className="card-avatar"></div>
                <div className="card-meta">
                  <div className="card-author">Suraj Kumar Mondal</div>
                  <div className="card-user-position">UI/UX Desginer</div>
                  <div className="card-links">
                    <a href="#facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#insta">
                      <FaInstagram />
                    </a>
                    <a href="#github">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://avatars.dicebear.com/api/avataaars/suraj_kumar_mondal.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
