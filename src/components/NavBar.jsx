// import "../components/NavBar.css"
import logo from "/home/icaro/Área de trabalho/50-Projects/2-Conference-Shedule/Logo.svg";
import { IoTicket } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";


function NavBar() {
    return (
        <div className="fixed z-50 top-0 items-center  bg-white w-full flex lg:h-20  h-20 justify-around ">
            <img className=" h-10   lg:h-12" src={logo} alt="" />
            <nav className="space-x-10 hidden lg:flex">
                <a href="">Speakers</a>
                <a href="">Speakers</a>
                <a href="">Speakers</a>
                <a href="">Speakers</a>
                <a href="">Speakers</a>
                <a href="">Speakers</a>

            </nav>
            <div className="flex w-28 lg:w-auto  justify-around ">
                <button className="text-2xl p-3 space-x-2 rounded-sm text-white bg-pink-600  h-9  flex justify-center items-center  lg:text-base lg:w-auto" >
                    <IoTicket className=""></IoTicket>
                    <span className="hidden lg:block">Book tickets for 2025</span>
                </button>
                <button className="text-3xl lg:hidden">
                    <FiMenu></FiMenu>
                </button>
            </div>
        </div>
    )
}
export default NavBar