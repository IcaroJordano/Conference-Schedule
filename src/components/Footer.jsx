import "./Footer.css"
import imagem from "../../Logo.svg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    return(
        <div className="Footer">
            <div className="text">
                <img src={imagem} alt="" />
                <p>Nairobi &copy; 2024</p>
            </div>
            <FaLinkedinIn></FaLinkedinIn>
            <FaXTwitter></FaXTwitter>
            <FaFacebookF></FaFacebookF>
            <FaInstagram></FaInstagram>

        </div>
    )
}
export default Footer