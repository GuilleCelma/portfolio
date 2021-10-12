
import "../../App.css"
import LinkList from "./NavbarElemenets"
import React, {useState} from "react"


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
            <h1>Logo</h1>
            </div>

            <div className="rightSide">
                <LinkList id ={showLinks ? "hidden" : ""}/>
                <button onClick={()=> setShowLinks(!showLinks)
                }><img src="/menu.png" alt="" id ="menuIcon"></img></button>
            </div>
        </nav>
    )
}

export default Navbar