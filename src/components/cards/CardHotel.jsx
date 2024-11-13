import "./CardHotel.css"
import imagem from "../../images/hotel.jpg"
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { faker } from '@faker-js/faker';
 
function CardHotel() {
    const preco=faker.commerce.price({min:700, max:2000})
    return (
        <div className="w-11/12  lg:w-64 mx-3  my-8 relative" >
            <div className="lg:h-40 h-56 bg-cover rounded-xl" style={{"background-image":`url(${faker.image.urlLoremFlickr({ category: "city" })})`}}>
                <p className="bg-rose-600 absolute -top-4  left-4 w-max p-2 rounded-lg text-xs font-bold text-white">FULLY BOOKED</p>
                <p className="bg-neutral-50 absolute bottom-14  right-4 w-max p-1 rounded-lg text-sm  text-neutral-600">
                    <span className="text-amber-500 font-bold">b</span>network</p>
            </div>
            <div className="flex justify-around">
                <div className="text-xs space-x-1 py-2 flex"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                <p className="name">Lisbon Marriot Hotel</p>
            </div>
            <p className="text-xs text-center flex justify-center lg:justify-normal w-full ">3 nights from $ {preco} (${preco*3}/ night)</p>
        </div>
    )
}
export default CardHotel