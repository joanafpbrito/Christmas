import { Link } from "react-router-dom";
import footerimage from "../assets/footerimage.png"

function Footer() {
    return (
    <div>
        <hr />
        <div className="footercontainer">
        <img  src={footerimage} alt="" /> <span></span>
        <p>Joana Brito | Front-End Developer | Técnicas Avançadas de Programação | Sara Monteiro | #digital reSkilling | <Link target="blank" to="https://www.cesaedigital.pt/">CESAE Digital</Link></p>
        </div>
    </div>
 )
}

export default Footer;