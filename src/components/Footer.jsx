import "./Footer.css"
import imagem from "../../Logo.svg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    return(
        <div className="Footer">
            <img src={imagem} alt="" />

                <div className="logos">
                <FaLinkedinIn></FaLinkedinIn>
                <FaXTwitter></FaXTwitter>
                <FaFacebookF></FaFacebookF>
                <FaInstagram></FaInstagram>
                 </div>
                 <div className="text">
                <a href="">Privacity</a>
                <a href="">Terms</a>
                <a href="">Preference Cookies</a>
            </div>
            <p>&copy;2024 Nairobi-Events Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, repellat obcaecati sequi accusamus</p>
        </div>
    )
}
export default Footer