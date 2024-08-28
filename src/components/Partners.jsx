import CardPartners from "./cards/CardPartnes"
import "./Partners.css"

function Partners() {
    return(
        <div className="Partners">
            <h3>Some partners from our 2024 events:</h3>
            <div className="Logos">
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
                <CardPartners></CardPartners>
            </div>
        </div>
    )
}
export default Partners