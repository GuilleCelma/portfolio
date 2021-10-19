
import Icon from '@mdi/react';
import { mdiLinkedin,mdiGithub } from '@mdi/js';




const AboutSection = ()=>{

    return (
        <section id="about">
            <div id="imgContainer">
              <img src="/about.jpg" alt="" />
            </div>
            <div id="aboutTextContainer">
                <h2>About Me</h2>

                <h4>Hello!<span> I'm Guille Celma</span></h4>

                <p>I'm a web developer based in Barcelona and I love creating web applications that people can enjoy and use.</p>
                <br/>

                <p>My goal is to create products that clients are proud of, and to architect clean and readable code.</p>
                <br/>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <br/>

                <div className="socialContainer">
                    <a  href="https://github.com/GuilleCelma" target="_blank" rel="noreferrer"> <Icon className="social" path={mdiGithub}/> </a>
                    <a  href="https://www.linkedin.com/in/guillem-celma/" target="_blank" rel="noreferrer"> <Icon className="social" path={mdiLinkedin}/> </a>
                </div>
               
                    
                
            </div>
        
        </section>

    )
}

export default AboutSection