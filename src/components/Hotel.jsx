import "./Hotel.css"
import CardHotel from "./cards/CardHotel"
import imagem from "../images/information.jpg"

function Hotel() {
    return (
        <div className="py-20 w-full">
            <h3 className=" lg:w-9/12  text-center text-4xl pb-10 mx-auto">77% of featured hotel rooms are unavailable during Web Summit. Lisbon is booking up.</h3>
            <div className="flex w-full lg:w-10/12 mx-auto flex-wrap  ">
                <CardHotel></CardHotel>
                <CardHotel></CardHotel>
                <CardHotel></CardHotel>
                <CardHotel></CardHotel>
            </div>
            <div className="img"></div>
        </div>
    )
}
export default Hotel