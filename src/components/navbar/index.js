
import "../../App.css"
import LinkList from "./NavbarElemenets"
import React, {useState} from "react"
import { Link } from "react-scroll"
import Fade from 'react-reveal/Fade';


const Navbar = () =>{
    const[showLinks, setShowLinks] = useState(false)
    const[navColor, setNavColor] = useState(false)

    const changeNavBackground = () =>{
        if(window.scrollY >= 80){
            setNavColor(true)
        }else{
            setNavColor(false)
        }
    }

    window.addEventListener("scroll", changeNavBackground)

    return (
        <nav className={ navColor ? "Navbar active" : "Navbar"} >
            <div className="leftSide">
                <Link to="hero" smooth={true} duration={1000} className={navColor ? "activeText": ""}> <img src="/alphabet-g.svg" alt="" id="logo"/> </Link>
            </div>

            <div className="rightSide">
                <Fade left >
                    <LinkList showLinks ={showLinks ? "hidden" : ""}  color={ navColor ? "activeText": ""}/>
                </Fade>
                <button onClick={()=> setShowLinks(!showLinks)}>
                    <img src="/menu3.png" alt="" id ="menuIcon"/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar