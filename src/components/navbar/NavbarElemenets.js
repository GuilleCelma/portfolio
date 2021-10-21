
import { Link } from "react-scroll"


 const LinkList = ({showLinks, color})=>{

   
    return(
        <ul id={showLinks}>
            <li>
                <Link to="about" smooth={true} duration={1000} className={color}>About</Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={1000} className={color}>Work</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={1000} className={color}>Contact</Link>
            </li>
        </ul>
    )
}

export default LinkList