
import { Link } from "react-scroll"


 const LinkList = ({id})=>{
    return(
        <ul id={id}>
            <li>
                <Link to="about" smooth={true} duration={1000}>About</Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={1000}>Work</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={1000}>Contact</Link>
            </li>
        </ul>
    )
}

export default LinkList