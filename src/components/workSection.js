import Icon from '@mdi/react';
import { mdiWeb, mdiGithub } from '@mdi/js';


const WorkSection = ()=>{

return(
    <section id="work">

        <h2>My Work</h2>

        <div id="workContainer">

            <div className="workCard">
                <img src="/tooly.png" alt="" />
                <div className="workText">

                    <h3>Tooly</h3>
                    <p> Web app builded with MERN stack</p>
                    <p className="tech">REACT.JS | NODE.JS | MONGO DB | PAYPAL| GOOGLE Geolocation | Talk.js</p>

                    <div className="workLinksContainer">
                        <a className="workLink" href="https://prj-toolsharing-front.herokuapp.com" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/prj-toolsharing-front/tree/main" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/> Front </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/proj-toolsharing-back/tree/main" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/> Back </a>

                    </div>
                </div>
            </div>

             <div className="workCard">
                <img src="/CryptoCharts.png" alt="" />
                 <div className="workText">

                    <h3>Cryptocoin</h3>
                    <p>CryptoCoin is a web app for those interested in the world of cryptocurrencies, it allows you to see in real time the prices of the most relevant cryptocurrencies and keep track of all your transactions to later visualize information about them in convinient graphs.</p>
                    <p className="tech">HTML | CSS | JS | NODE.JS | MONGO DB | CoinGecko API | Passport</p>
                    <div className="workLinksContainer">
                        <a className="workLink" href="https://cryptocoin-project.herokuapp.com" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/Cryptocoin" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/>Code</a>
                       

                    </div>
                </div>
                
                
            </div> 

             <div className="workCard">
                <img src="/shark.png" alt="" />
                 <div className="workText">

                    <h3>Hungry shark</h3>
                    <p> Web app builded with MERN stack 

                    </p>

                    <div className="workLinksContainer">
                        <a className="workLink" href="https://guillecelma.github.io/Project1-HungryShark/" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiWeb}/> Site </a>
                        <a className="workLink" href="https://github.com/GuilleCelma/Project1-HungryShark" target="_blank" rel="noreferrer"> <Icon className="workLink" path={mdiGithub}/>  Code </a>
                     
                    </div>
                </div>
                
                
            </div> 
            

        </div>


    </section>

)


}

export default WorkSection