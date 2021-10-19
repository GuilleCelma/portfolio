
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiWhatsapp } from '@mdi/js';


const Footer = ()=>{


    return(
        <footer id="footer">

            <div id="footerLinks">

                <a  href="https://github.com/GuilleCelma/" target="_blank" rel="noreferrer"> <Icon className="footerLink" path={mdiGithub}/></a>
                <a  href="https://www.linkedin.com/in/guillem-celma" target="_blank" rel="noreferrer"> <Icon className="footerLink" path={mdiLinkedin}/></a>
                <a  href="https://wa.me/34620107825" target="_blank" rel="noreferrer"> <Icon className="footerLink" path={mdiWhatsapp}/></a>

            </div>

            <p>2021 © Guille Celma. Design by Guille Celma.</p>
        </footer>
    )
}

export default Footer