import "./CarPartnes.css"
import imagen from "../../../Logo.svg"

function CardPartners({image}) {
    return(
        <div className="CardPartners">
            <img src={image} alt="" />
        </div>
    )
}
export default CardPartners