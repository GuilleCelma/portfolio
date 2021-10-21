
import Icon from '@mdi/react';
import { mdiLinkedin,mdiGithub } from '@mdi/js';
import Fade from 'react-reveal/Fade';




const AboutSection = ()=>{

    return (
        <section id="about">
            <Fade left>
                <div id="imgContainer">
                <img src="/about.jpg" alt="" />
                </div>
            </Fade>
            <Fade right>
            <div id="aboutTextContainer">
                <h2>About Me</h2>

                <h4>Hello!<span> I'm Guille Celma</span></h4>

                <p>I'm a web developer based in Barcelona and adept in bringing forth expertise in installation, testing and maintenance of web applications.</p>
                <br/>

                <p>Experienced with the latest cutting edge development tools and procedures.</p>
                <br/>

                <p>Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.</p>
                <br/>

                <div className="socialContainer">
                    <a  href="https://github.com/GuilleCelma" target="_blank" rel="noreferrer"> <Icon className="social" path={mdiGithub}/> </a>
                    <a  href="https://www.linkedin.com/in/guillem-celma/" target="_blank" rel="noreferrer"> <Icon className="social" path={mdiLinkedin}/> </a>
                </div>
               
                    
                
            </div>
            </Fade>
        </section>

    )
}

export default AboutSection