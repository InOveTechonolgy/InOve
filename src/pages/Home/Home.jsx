import React from 'react'
import "./Home.css"
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import triangle from "../../assets/imgs/triangle_illsutration.png"
import arrow_right from "../../assets/imgs/arrow_right.png"
import {motion} from "framer-motion"
import {FaInstagram,FaLinkedinIn,FaFacebookF} from "react-icons/fa"
// eslint-disable-next-line
import boxes from "../../assets/imgs/boxes.png"
import ServiceCard from '../../components/ServiceCard'
import Footer from '../../components/Footer'
import {FaReact,FaHtml5,FaJs,FaCss3} from "react-icons/fa"
import sumit from "../../assets/imgs/sumit.jpeg"
function Home() {
    return (
        <div className="home">
            <div className="dark-hero">
                <Container>
                    <Navbar/>
                    <motion.div
  animate={{ x: 0, y: 0, opacity:1 }}
  transition={{
    delay: 1,
    x: { type: "spring", stiffness: 100 },
    y:{type:"spring",stiffness:-50},
    opacity:0,
    default: { duration: 2 },
  }}div className="hero__top__container">
                        <h1>We build beautiful and reliable web & mobile solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nibh tortor facilisi maecenas. Enim et purus orci, nunc aliquam nunc. Mauris amet enim netus vel. Viverra enim facilisis faucibus eu, et scelerisque gravida.</p>
                        <div className="hero__buttons">
                            <a href="#more" className="btn btn-primary">Learn more.</a>
                            <a href="#project" className="btn btn-secondary">Our Projects <img src={arrow_right} alt="arrow_right" /></a>
                        </div>
                    </motion.div>

                    <div className="services__header">
                        <h3>Our Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nibh tortor facilisi maecenas. Enim et purus orci, nunc aliquam nunc. Mauris amet enim netus vel. </p>
                    </div>

                    <div className="services__cards">
                        <ServiceCard title="Business & Product Concept"/>
                        <ServiceCard title="Web & Mobile Development"/>
                        <ServiceCard title="UX & UI Design"/>
                    </div>
                </Container>
                <img src={triangle} alt="triangle-illustration" className="triangle-illustration" />
            </div>

            <div className="technology__section">
                <Container>
                <div className="technology__body">
                    <h2>We use cutting edge technology</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, ullamcorper lacus, fusce sed orci nibh porttitor adipiscing ullamcorper. Imperdiet porttitor netus magna scelerisque etiam. Sed amet auctor egestas ante ipsum. Amet ornare a vulputate amet, urna, in nibh semper non.</p>
                    <div className="technology__icons">
                        <div><FaReact/></div>
                        <div><FaHtml5/></div>
                        <div><FaCss3/></div>
                        <div><FaJs/></div>
                        
                    </div>
                </div>
                
                </Container>
                {/* <img src={boxes} alt="boxes"  className="boxes"/> */}
            </div>

            <div className="team-section">
                <h4>OUR TEAM</h4>
               <div className="team-persons">
                   <div className="first-person">
        <div className="first-person-card">
            <div className="card-wrapper">
                <div className="card-avatar">
                <img src={sumit} alt=""/>
                </div>
                <div className="card-meta">
                    <div className="card-author">Sumit</div>
                    <div className="card-user-position">FullStack Web Developer</div>
                    <div className="card-links">
                        <a href="#facebook"><FaFacebookF/></a>
                        <a href="#insta"><FaInstagram/></a>
                        <a href="#github"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </div>
               <img src={sumit} alt=""/></div>
                <div  className="second-person">
                <div className="second-person-card">
            <div className="card-wrapper">
                <div className="card-avatar"></div>
                <div className="card-meta">
                    <div className="card-author">Abhay Gudihal</div>
                    <div className="card-user-position">Web Developer</div>
                    <div className="card-links">
                        <a href="#facebook"><FaFacebookF/></a>
                        <a href="#insta"><FaInstagram/></a>
                        <a href="#github"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </div>
                    <img src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" alt=""/></div>
                <div className="third-person">
                <div className="third-person-card">
            <div className="card-wrapper">
                <div className="card-avatar"></div>
                <div className="card-meta">
                    <div className="card-author">Shailesh Kamble</div>
                    <div className="card-user-position">Founder,Mobile Application Developer</div>
                    <div className="card-links">
                        <a href="#facebook"><FaFacebookF/></a>
                        <a href="#insta"><FaInstagram/></a>
                        <a href="#github"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </div>
                    <img
src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt=""/></div>
                <div className="fourth-person">
                <div className="fourth-person-card">
            <div className="card-wrapper">
                <div className="card-avatar"></div>
                <div className="card-meta">
                    <div className="card-author">Suraj Kumar Mondal</div>
                    <div className="card-user-position">UI/UX Desginer</div>
                    <div className="card-links">
                        <a href="#facebook"><FaFacebookF/></a>
                        <a href="#insta"><FaInstagram/></a>
                        <a href="#github"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </div>
                    <img src="https://randomuser.me/api/portraits/men/61.jpg" alt=""/>
                </div>
               </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Home
