
import "../../App.css"
import LinkList from "./NavbarElemenets"
import React, {useState} from "react"


const Navbar = () =>{
    const[showLinks, setShowLinks] = useState(false)

    return (
        <div className="Navbar">
            <div className="leftSide">
            <h1>Logo</h1>
            </div>

            <div className="rightSide">
                <LinkList id ={showLinks ? "hidden" : ""}/>
                <button onClick={()=> setShowLinks(!showLinks)
                }><img src="/menu.png" alt="" id ="menuIcon"></img></button>
            </div>
        </div>
    )
}

export default Navbar