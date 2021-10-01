import React from 'react'
import Container from './Container'
// eslint-disable-next-line
import logo from "../assets/imgs/logov2.png"
import {FaInstagram,FaLinkedinIn,FaFacebookF} from "react-icons/fa"
import linktree from "../assets/imgs/linktree.svg"
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <Container>
                <div className="footer-body">
                <div className="footer__company_info">
                    <h3>Inove Tech</h3>
                    {/* <img src={logo} alt="" /> */}
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum provident dolore ipsum eligendi voluptatibus omnis sit veritatis quasi cum officia placeat, expedita dicta ipsam, veniam pariatur qui quas, ullam officiis.</p>
                    <div className="company-socla-links">
                        <a href="#insta"><FaInstagram/></a>
                        <a href="#facebook"><FaFacebookF/></a>
                        <a href="#linktree"><img src={linktree} alt="linktree" /></a>
                        <a href="#linkedin"><FaLinkedinIn/></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="sitemaps">
                        <div className="link-heading">Sitemap</div>
                        <ul>
                            <li>
                                <div><a href="#home">Home</a></div>
                            </li>
                            <li>
                                <div><a href="#services">Services</a></div>
                            </li>
                            <li>
                                <div><a href="#technology">Technology</a></div>
                            </li>
                            <li>
                                <div><a href="#about">About</a></div>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <div className="link-heading">Contact</div>
                        <ul>
                            <li>
                                <div><a href="#jobs">Jobs</a></div>
                            </li>
                            <li>
                                <div><a href="#join">Join us</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
