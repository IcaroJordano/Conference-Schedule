import "./Footer.css"
import imagem from "../../Logo.svg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <div className="lg:pl-28 py-10 pl-4">
            <img className="  h-8 object-cover" src={imagem} alt="" />
            <p className="my-4 lg:text-neutral-600/80">Nairobi Events &copy; 2024  </p>
            <div className="flex flex-col lg:flex-row pt-10">
                <div className="logos flex lg:flex-row lg:w-6/12  space-x-2 lg:space-x-4 text-sm lg:text-base ">
                    <a href=""><FaLinkedinIn></FaLinkedinIn></a>
                    <a href=""><FaXTwitter></FaXTwitter></a>
                    <a href=""><FaFacebookF></FaFacebookF></a>
                    <a href=""><FaInstagram></FaInstagram></a>                
                </div>
                <div className="lg:bg-6/12 flex mt-4 space-x-5 text-neutral-600/80 underline">
                    <a href="">Privacity</a>
                    <a href="">Terms</a>
                    <a href="">Preference Cookies</a>
                    <a href="">Manager Cookies</a>
                </div>
            </div>
        </div>
    )
}
export default Footer