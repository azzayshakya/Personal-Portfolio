import React from "react";
import {} from '../css/projects.css'
// import {fodii} from '../images/fodii ss.png'

const Projects=()=>{
    return<>
    <header class="header">
        <a class="logo" href="#">AJAY</a>

        <div class="bx bx-menu" id="menu-icon"></div>

        

        <nav class="navbar">
            
        <a class="active" href="index.html">Home</a>
        <a href="index.html">About</a>
        <a href="./projects.html">Project</a>
        <a href="index.html">Education</a>
        <a href="index.html">Skills</a>
        <a href="index.html">Contact</a>
            
        <span class="active-nav"></span>
        </nav>
    </header>


<section  class="projects">
    
    <h1>My Some <span> Projects</span></h1>
    
    <div class="projects-row">
        <div class="projects-column">
            <div class="projects-box">
                <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/fodii ss.png" alt=""/>
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="https://github.com/its-ajay-shakya/Fodiii.git"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div>
                <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/gym ss.png" alt=""/>
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="https://github.com/its-ajay-shakya/Front-end-of-login-page-2.git"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div>
            </div>                  
        </div>

        <div class="projects-column">
            <div class="projects-box">
                <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/portfolio ss.png" alt=""/>
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="https://github.com/its-ajay-shakya/Personal-Portfolio.git"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div>
                <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/outviewpng ss .png" alt=""/>
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="https://github.com/its-ajay-shakya/login-page.git"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div>
            </div>                  
        </div>

        

        
    </div>

    <div class="projects-row">
        <div class="projects-column">
            <div class="projects-box">
                <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/calcultor ss.png" alt=""/>
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="https://github.com/its-ajay-shakya/Calculator_front_end.git"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div>
                {/* <!-- <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/gym ss.png" alt="">
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="https://github.com/its-ajay-shakya/Front-end-of-login-page-2.git"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div> --> */}
            </div>                  
        </div>

        <div class="projects-column">
            <div class="projects-box">
                <div class="projects-content last">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/portfolio ss.png" alt=""/>
                        </div>
                            <p>
                                Currently working on this project.
                                </p>
                            <div class="btn-box btns ">
                                <a href="#"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div>
                {/* <!-- <div class="projects-content">
                    <div class="content">
                        <div class="project-image">
                            <img src="/images/portfolio ss.png" alt="">
                        </div>
                            <p>
                                Created my own portfolio website by using HTML ,CSS and JavaScript. 📖 Multi-Page Layout and 📱 Fully Responsive.
                            </p>
                            <div class="btn-box btns ">
                                <a href="#"  class="btn">GITHUB</a>
                            </div>
                            
                    </div>          
                </div> --> */}
            </div>                  
        </div>

        

        
    </div>

</section> 

<footer class="footer">
    <div class="footer-text">
        <p>Copyright &copy; 2023- All rights reserved || Designed By: Ajay Kr Shakya</p>
    </div>

    <div class="footer-icon">
        <a href="#"> <i class='bx bx-up-arrow-alt'></i></a>
    </div>

</footer>
    </>
}
export default  Projects;