import "./CarPartnes.css"
import imagen from "../../../Logo.svg"

function CardPartners({image}) {
    return(
        <div className="bg-white p-8 m-5 rounded-lg  ">
            <img className="w-20" src={image} alt="" />
        </div>
    )
}
export default CardPartners