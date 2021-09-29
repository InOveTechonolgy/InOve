import React from 'react'
import "./Home.css"
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import triangle from "../../assets/imgs/triangle_illsutration.png"
import arrow_right from "../../assets/imgs/arrow_right.png"
import boxes from "../../assets/imgs/boxes.png"
import ServiceCard from '../../components/ServiceCard'
function Home() {
    return (
        <div className="home">
            <div className="dark-hero">
                <Container>
                    <Navbar/>
                    <div className="hero__top__container">
                        <h1>We build beautiful and reliable web solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nibh tortor facilisi maecenas. Enim et purus orci, nunc aliquam nunc. Mauris amet enim netus vel. Viverra enim facilisis faucibus eu, et scelerisque gravida.</p>
                        <div className="hero__buttons">
                            <a href="#more" className="btn btn-primary">Learn more.</a>
                            <a href="#project" className="btn btn-secondary">Our Projects <img src={arrow_right} alt="arrow_right" /></a>
                        </div>
                    </div>

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
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                
                </Container>
                <img src={boxes} alt="boxes"  className="boxes"/>
            </div>

            <div className="team-section">
                <h4>OUR TEAM</h4>
               <div className="team-persons">
               <img src="https://uifaces.co/our-content/donated/bUkmHPKs.jpg" alt="" className="first-person"/>
                <img src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" alt="" className="second-person"/>
                <img src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" className="third-person"/>
                <img src="https://randomuser.me/api/portraits/men/61.jpg" alt="" className="fourth-person"/>
               </div>
            </div>

        </div>
    )
}

export default Home
