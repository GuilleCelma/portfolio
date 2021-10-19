import Icon from '@mdi/react';
import { mdiCellphoneBasic, mdiEmailOutline } from '@mdi/js';
import { useForm, ValidationError } from '@formspree/react';

    
    
    
const ContactSection = ()=>{

    const [state ] = useForm("mgerbkgd");
    
    return(

        <section id="contact">

            <h2>Contact Me!</h2>

            <div id="contactContainer">
                <div className="contactCard">
                    <Icon className="contactIcon" path={mdiCellphoneBasic}/>
                    <h5>Call Me</h5>
                    <p>+34 620 107 825</p>
                </div>
                <div className="contactCard">
                    <Icon className="contactIcon" path={mdiEmailOutline}/>
                    <h5>Email</h5>
                    <p>Guillecelmaan@hotmail.es</p>
                </div>
                <div className="contactCard">
                    <Icon className="contactIcon" path={mdiCellphoneBasic}/>
                    <h5>Call Me</h5>
                    <p>+34 620 107 825</p>
                </div>


            </div>
            <form action="https://formspree.io/f/mgerbkgd" method="POST"  id="contactForm">
     
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your Email..."
                />
                <input
                    id="name"
                    type="text" 
                    name="name"
                    placeholder="Your First Name..."
                />
                <input
                    id="subject"
                    type="text" 
                    name="subject"
                    placeholder="Your Subject..."
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message..."
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" id="submitBtn" disabled={state.submitting}>
                    Submit
                </button>
            </form>

        </section>
    )
}

export default ContactSection