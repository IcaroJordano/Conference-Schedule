import "./Hotel.css"
import CardHotel from "./cards/CardHotel"
import imagem from "../images/information.jpg"

function Hotel() {
    return(
        <div className="Hotel">
            <h3>77% of featured hotel rooms are unavailable during Web Summit. Lisbon is booking up.</h3>
            <CardHotel></CardHotel>
            <CardHotel></CardHotel>
            <CardHotel></CardHotel>
            <CardHotel></CardHotel>
            <div className="img"></div>
        </div>
    )
}
export default Hotel