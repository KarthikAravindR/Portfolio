import React from 'react'
import Tilt from 'react-parallax-tilt';

import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = props => {
    return (
        <div className="ProjectsContainer" id='Project'>
            <h1>Projects<img src="https://img.icons8.com/nolan/32/project-management.png" alt="Projects" /></h1>
            <div className="ProjectContainer">
                <Tilt>
                    <a href="https://atheneum-karthik.web.app/" target='_blank' rel="noreferrer">
                        <div className="Project">
                            <h2>Atheneum Blogs</h2>
                            <p>Inspired by Medium, Developed a Platform where user can Read, Write and Publish Blogs.</p>
                            <div>REACT JS/SCSS-MODULES/EXPRESS JS/MONGO DB</div>
                            <a href="https://github.com/KarthikAravindR/Atheneum-Articles" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            </a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://canvasshopping.web.app/" target='_blank' rel="noreferrer">
                        <div className="Project1">
                            <h2>Canvas E-Commerce</h2>
                            <p>Developed a Full-Fledged E-Commerce Web Application where users can browse and buy Shoes.</p>
                            <div>REACT JS/CSS-MODULES/EXPRESS JS/MONGO DB</div>
                            <a href="https://github.com/KarthikAravindR/Canvas-Online_shopping" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://lit-weather-fd3d0.web.app/" target='_blank' rel="noreferrer">
                        <div className="Project2">
                            <h2>Weather Forecast</h2>
                            <p>Developed a Weather Forecasting website which shows Weather and 8 days Forecast of any place.</p>
                            <div>REACT JS/CSS-MODULES/OPEN WEATHER API</div>
                            <a href="https://github.com/KarthikAravindR/Weather-forecast" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://react-my-burger-karthik.firebaseapp.com/" target='_blank' rel="noreferrer">
                        <div className="Project3">
                            <h2>Burger Booking</h2>
                            <p>Developed a website where user can add Ingridients to their burger and place the order.</p>
                            <div>REACT JS/CSS-MODULES/GOOGLE FIREBASE</div>
                            <a href="https://github.com/KarthikAravindR/burgerbuilder" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://premier-socceracademy.web.app/" target='_blank' rel="noreferrer">
                        <div className="Project4">
                            <h2>Premier Soccer Academy</h2>
                            <p>Developed a website for Football Coaching Academy.</p>
                            <div>REACT JS/CSS-MODULES/GOOGLE FIREBASE</div>
                            <a href="https://github.com/KarthikAravindR/PremierSoccerAcademy" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://beginnerconsultant.web.app/" target='_blank' rel="noreferrer">
                        <div className="Project5">
                            <h2>The Beginner Consultant</h2>
                            <p>Developed a website for Start-up Consultant.</p>
                            <div>REACT JS/CSS-MODULES/GOOGLE FIREBASE</div>
                            <a href="https://github.com/KarthikAravindR/start-up-landing" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://github.com/KarthikAravindR/Todolist" target='_blank' rel="noreferrer">
                        <div className="Project6">
                            <h2>To Do List</h2>
                            <p>Developed a web applications where users can add their daily tasks to do.</p>
                            <div>REACT JS/CSS-MODULES/GOOGLE FIREBASE</div>
                            <a href="https://github.com/KarthikAravindR/Todolist" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <Tilt>
                    <a href="https://github.com/KarthikAravindR/Movie-Ticket-Booking" target='_blank' rel="noreferrer">
                        <div className="Project7">
                            <h2>Movie Ticket Booking</h2>
                            <p>Developed a website where users can book tickes for their favourite movie.</p>
                            <div>REACT JS/CSS-MODULES/GOOGLE FIREBASE</div>
                            <a href="https://github.com/KarthikAravindR/Movie-Ticket-Booking" target='_blank' rel="noreferrer"><div>
                                <FontAwesomeIcon icon={faGithub} />
                            </div></a>
                        </div>
                    </a>
                </Tilt>
                <div className="Project8"></div>
            </div>
        </div>
    )
}

export default Projects