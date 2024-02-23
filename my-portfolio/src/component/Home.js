import React, { useState } from "react";
import {} from '../css/home.css'
import { Link } from "react-router-dom";
import foodiiss from '../images/Foodiii.png'
import zobs from '../images/Zobs.png'

import about from '../images/about.jpg';

import portfolio from '../images/portfolio.png'
import loginpage from '../images/loginpage.png'
import gym from '../images/gym ss.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



import reactjs from '../images/reactjs.jpg'
import expressjs from '../images/expressjs.png'
import nodejs from '../images/nodejs.jpg'
import MongoDB from '../images/MongoDB.png'

import html from '../images/html.png'
import css from '../images/css.jpg'
import js from '../images/js.png'
import java from '../images/java,webp.webp'
import git from '../images/git.webp'
import Cplusplus from '../images/c++.webp'

import { ImCross } from "react-icons/im"; 
import { TiThMenu } from "react-icons/ti";








const Home = () => {

    const [toggle,settoggle]=useState(false);
    const hadletoggle =()=>{
        settoggle(!toggle);
    }
    return <div>

    

<header class="header active">
        <a class="logo" href="#">AJAY</a>

        

        

        <nav class="navbar">
            
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#Projects">projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
            
       
        </nav>

        {/* <!-- mobile-navbar-btn --> */}

        {/* <nav class="mobile-navbar-btn" onClick={hadletoggle}>
            <TiThMenu name="menu-button"/>
            <ImCross name="cross-button"/>
        </nav> */}

{ toggle && (
 
 <div className=" navbar togglenavbar">
 
 <a className="toggleactive" href="#home">Home</a>
 <a href="#about">About</a>
 <a href="#skills">Skills</a>
 <a href="#Projects">projects</a>
 <a href="#education">Education</a>
 <a href="#contact">Contact</a>
 
 
 </div>
 
 
 )}

       


        


            <div className="togglenavbarbutton">
            <button onClick={hadletoggle}>
                {
                    toggle ? <ImCross/> :<TiThMenu/>
                }


            </button>
        </div>
        

        

        
   


</header>

    

                      

    <section class="home"  id="home">
        <div class="home-content">
            <h1>Hi i'm <span>Ajay Kr. Shakya</span></h1>
            <div class="text-animate skilltext aboutajay">
                <h3 class="fullstack">FULL STACK WEB DEVELOPER</h3>
            </div>
            <div class="text-animate ">
                <h3 class="java">DSA(JAVA)</h3>
            </div>


            <p>
                
            </p>


            <div class="btn-box">
                <a href="#contact" class="btn">Hire Me</a>
                {/* <!-- <a href="#" class="btn">Let's Talk</a> --> */}

            </div>
        </div>
        <div class="home-sci">
            <a href="https://www.instagram.com/azzayshakya/" target="_blank"><FaInstagram/></a>
            <a href="https://www.github.com/azzayshakya/" target="_blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/azzayshakya/"  target="_blank"><FaLinkedin/></a>
            <a href="https://www.facebook.com/azzayshakya/" target="_blank"><FaFacebookF/></a>
        </div>  

        <div class="home-imageHover">

        </div> 


     </section>
     

    <section class="about " id="about">
        <h2 class="heading"> About <span>Me</span></h2>

        <div class="about-img">
            <img src={about} alt=""/>
            <span class="circle-spin"></span>
        </div>
            <div class="about-content">
                <h3>FULL STACK WEB DEVELOPER  <span>(MERN)</span></h3>
    
                <p className="aboutinfo">I am a B.Tech student at BIT Meerut College specializing in full-stack development, particularly proficient in utilizing the MERN stack. <br />


                With hands-on experience, I have developed impactful projects including a dynamic Cloud Kitchen website and an innovative Job Portal platform. <br/>
                    
                With over a year of work experience in web development, including an internship at INTERNPE<br />
                    
                I am dedicated to honing my skills and contributing meaningfully to the tech industry.
                    
                </p>
                    
            </div>
            {/* <div class="btn-box btns readmorebtn ">
                <a href="#"  class="btn">Read more</a>
            </div> */}

        
    </section> 


    






 

    <section class="skills" id="skills">
        <h2 class="heading">My <span>Skills</span></h2>



        {/* <div class="skills-row">
            <div class="skills-column">
                <h3 class="title">Coding Skills</h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>HTML <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>CSS<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>JavaScript<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>JAVA<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skills-column">
                <h3 class="title">Coding Skills</h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>DSA(JAVA)<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Express.js<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Node.js<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>C++<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

         <div className="skillRow">
            <div className="skillCard">
                <div className="skillimg">
                    <img src={reactjs} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">React JS</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            <div className="skillCard">
                <div className="skillimg">
                    <img src={expressjs} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">Express JS</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            <div className="skillCard">
                <div className="skillimg">
                    <img src={nodejs} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">Node JS</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            <div className="skillCard">
                <div className="skillimg">
                    <img src={MongoDB} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle"> MongoDB</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            

        </div>
        <div className="skillRow">

        <div className="skillCard">
                <div className="skillimg">
                    <img src={git} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">GIT</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            
            <div className="skillCard">
                <div className="skillimg">
                    <img src={css} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">CSS</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            <div className="skillCard">
                <div className="skillimg">
                    <img src={js} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">JS</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            <div className="skillCard">
                <div className="skillimg">
                    <img src={java} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">JAVA</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            

        </div>
        <div className="skillRow">
            <div className="skillCard">
                <div className="skillimg">
                    <img src={Cplusplus} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">C++</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            <div className="skillCard">
                <div className="skillimg">
                    <img src={html} alt="" />
                </div>
                <div className="skillinfo">
                    <p className="skillTitle">HTML</p>
                    {/* <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p> */}
                </div>


            </div>
            
            
            

        </div>




    </section>

    <div class="Projects" id="Projects">
    <h2 class="heading">My <span>Projects</span></h2>
        <div className="projectsrow">
            <div className="projectCard">
                <div className="projectimg">
                    <img src={foodiiss} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Foodiii (A cloud kitchen)</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p>
                </div>


            </div>
            <div className="projectCard">
                <div className="projectimg">
                    <img src={zobs} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Zobs (A job portal)</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM  
                    </p>
                </div>


            </div><div className="projectCard">
                <div className="projectimg">
                    <img src={portfolio} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">My Portfolio</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB 
                    </p>
                </div>


            </div>
            

        </div>
        <div className="projectsrow">
        <div className="projectCard">
                <div className="projectimg">
                    <img src={gym} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Gym login page</p>
                    <p className="techs">
                    Html ,Css ,Js  
                    </p>
                </div>


            </div>
            <div className="projectCard">
                <div className="projectimg">
                    <img src={loginpage } alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Login page</p>
                    <p className="techs">
                        Html ,Css ,Js 
                    </p>
                </div>


            </div>

            {/* <div className="projectCard"></div> */}
        </div>

    </div>

    <section class="education" id="education">
        <h2 class="heading">MY <span>Journy</span></h2>
        
        <div class="education-row">
            <div class="education-column">
                <h3 class="title">Education</h3>
                 <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2016-2018</div>
                            <h3>10th - S.D.S.V. mandir(Budaun)</h3>
                            <p>I have completed my 10th from Shiv devi saraswati vidhya mandir (Budaun,UP)</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2018-2020</div>
                            <h3>12th - S.R.S.V. mandir(Budaun)</h3>
                            <p>I have completed my 10th from Shree ram saraswati vidhya mandir (Budaun,UP)</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2020-2024</div>
                            <h3>B.Tech -BIT(meerut)</h3>
                            <p>I have completed my graduation from Bharat Institute of Technology (Meerut)</p>
                        </div>
                    </div>
                 </div>
            </div>


            <div class="education-column">
                <h3 class="title">Experience</h3>
                 <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2024</div>
                            <h3>MERN stack </h3>
                            <p>I have completed the full stack web development.</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2023</div>
                            <h3>DSA (java)</h3>
                            <p>I have solved the many dsa questions in java.</p>
                        </div>
                    </div>
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2022</div>
                            <h3>JAVA - C++ </h3>
                            <p>Currently , I have the knowledge of java and c++ </p>
                        </div>
                    </div>

                    {/* <!-- <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2017 2029</div>
                            <h3>dkdl</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit quaerat itaque quo, molestiae rerum facilis labore impedit vel harum?</p>
                        </div>
                    </div> --> */}
                 </div>
            </div>
        </div>

    </section>

        

    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>
        <form action="#" class="form">
            <div class="input-box">
                <div class="input-field">
                    <input type="text" class="userName" placeholder="Full name" required/>
                    <span class="focus"></span>

                </div>
                <div class="input-field">
                    <input type="email" placeholder="Mail" required class="userEmail"/>
                    <span class="focus"></span>
                </div>

                </div>
                <div class="input-box">
                <div class="input-field">
                    <input type="number" class="userNumber" placeholder="Your Number" required/>
                    <span class="focus"></span>

                </div>
                <div class="input-field">
                    <input type="text" class="userSubject" placeholder="Subject" required/>
                    <span class="focus"></span>

                </div>
            </div>
            
            <div class="textarea-field">
                <textarea class="userText" cols="30" rows="10" placeholder="type you massange here" required></textarea>
                <span class="focus"></span>
            </div>
            <div class="btn-box btns" >
                <button type="submit" class="btn onsumi">Submit</button>
            </div>
        </form>
    </section>
    

   
   
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023- All rights reserved || Designed By: Ajay Kr Shakya</p>
        </div>

        {/* <div class="footer-icon">
            <a href="#"> <i class='bx bx-up-arrow-alt'></i></a>
        </div> */}

    </footer>
        
    
    

   
    </div>;
}
export default Home;