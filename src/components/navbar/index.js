
import "../../App.css"
import LinkList from "./NavbarElemenets"
import React, {useState} from "react"
import { Link } from "react-scroll"


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
            <Link to="hero" smooth={true} duration={1000} className={navColor ? "activeText": ""}>Logo</Link>
            </div>

            <div className="rightSide">
                <LinkList id ={showLinks ? "hidden" : ""}  color={ navColor ? "activeText": ""}/>
                <button onClick={()=> setShowLinks(!showLinks)
                }><img src="/menu3.png" alt="" id ="menuIcon"></img></button>
            </div>
        </nav>
    )
}

export default Navbar