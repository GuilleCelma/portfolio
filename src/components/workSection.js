import Icon from '@mdi/react';
import { mdiWeb, mdiGithub } from '@mdi/js';
import Fade from 'react-reveal/Fade';

const WorkSection = ()=>{

return(
    <section id="work">

        <h2>My Work</h2>

        <div id="workContainer">
        <Fade bottom>
            <div className="workCard">
                <img src="/tooly.png" alt="" />
                <div className="workText">

                    <h3>Tooly</h3>
                    <p> Web app that serves as a contact platform beetween users that need tools and users that offer renting toolsU. Users can book tools for several and pay by paypal or advertise their tools for someone else to rent.</p>
                    <p className="tech">REACT.JS | NODE.JS | MONGO DB | PAYPAL| GOOGLE Geolocation | Talk.js</p>

                    <div className="workLinksContainer">
                        <a className="workLink" href="https://prj-toolsharing-front.herokuapp.com" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/prj-toolsharing-front/tree/main" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/> Front </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/proj-toolsharing-back/tree/main" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/> Back </a>

                    </div>
                </div>
            </div>
        </Fade>
        <Fade bottom>
             <div className="workCard">
                <img src="/CryptoCharts.png" alt="" />
                 <div className="workText">

                    <h3>Cryptocoin</h3>
                    <p>CryptoCoin allows you to see in real time the prices of the most relevant cryptocurrencies and keep track of all your transactions to later visualize information about them in convinient graphs.</p>
                    <p className="tech">HTML | CSS | JS | NODE.JS | MONGO DB | CoinGecko API | Passport</p>
                    <div className="workLinksContainer">
                        <a className="workLink" href="https://cryptocoin-project.herokuapp.com" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/Cryptocoin" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/>Code</a>
                       

                    </div>
                </div>
                
            </div> 
        </Fade>
        <Fade bottom>
             <div className="workCard">
                <img src="/ChatBox2.png" alt="" />
                 <div className="workText">

                    <h3>ChatBox</h3>
                    <p> Instant Messaging Web app that lets  users create private rooms and  add other users  for chat together in real time</p>
                    <p className="tech">REACT.js | CSS | Firebase | Google Auth </p>
                    <div className="workLinksContainer">
                        <a className="workLink" href="https://chatboxwebapp.netlify.app" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/ChatBox" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/>  Code </a>
                     
                    </div>
                </div>
                
            </div> 
        </Fade>
        <Fade bottom>
             <div className="workCard">
                <img src="/shark.png" alt="" />
                 <div className="workText">

                    <h3>Hungry shark</h3>
                    <p> A game created using HTLM, canvas,CSS and Javascript. The goal is to eat 30 small fishes while dodgin enemy mines.</p>
                    <p className="tech">HTML | CSS | JS </p>
                    <div className="workLinksContainer">
                        <a className="workLink" href="https://guillecelma.github.io/Project1-HungryShark/" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/Project1-HungryShark" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/>  Code </a>
                     
                    </div>
                </div>
                
            </div> 
        </Fade>
       
            

        </div>


    </section>

)


}

export default WorkSection