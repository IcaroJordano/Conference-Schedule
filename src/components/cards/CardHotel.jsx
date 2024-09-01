import "./CardHotel.css"
import imagem from "../../images/hotel.jpg"
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { faker } from '@faker-js/faker';
 
function CardHotel() {
    const preco=faker.commerce.price({min:700, max:2000})
    return (
        <div className="CardHotel" >
            <div className="img" style={{"background-image":`url(${faker.image.urlLoremFlickr({ category: "city" })})`}}>
                <p className="red">FULLY BOOKED</p>
                <p className="white"><span>b</span>network</p>
            </div>
            <div className="top">
                <div className="estrelas"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                <p className="name">Lisbon Marriot Hotel</p>
            </div>
            <p className="preco">3 nights from $ {preco} (${preco*3}/ night)</p>
        </div>
    )
}
export default CardHotel