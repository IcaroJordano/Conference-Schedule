import "./CardHotel.css"
import imagem from "../../images/hotel.jpg"
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

 
function CardHotel() {
    return (
        <div className="CardHotel">
            <div className="img">
                <p className="red">FULLY BOOKED</p>
                <p className="white"><span>b</span>network</p>
            </div>
            <div className="top">
                <div className="estrelas"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                <p className="name">Lisbon Marriot Hotel</p>
            </div>
            <p className="preco">3 nights from $1005,00 ($335,00/ night)</p>
        </div>
    )
}
export default CardHotel