import "../components/NavBar.css"
import logo from "/home/icaro/Área de trabalho/50-Projects/2-Conference-Shedule/Logo.svg";
import { IoTicket } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";


function NavBar() {
    return(
        <div className="NavBar">
            <img src={logo} alt="" />
            <div className="Buttons">
                <button className="Ticket">
                    <IoTicket></IoTicket>
                </button>
                <button className="Menu">
                    <FiMenu></FiMenu>
                </button>
            </div>
        </div>
    )
}
export default NavBar