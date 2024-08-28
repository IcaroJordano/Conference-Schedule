import "../cards/CardSpeakers.css"
import imagem from "/home/icaro/Área de trabalho/50-Projects/2-Conference-Shedule/src/images/images.jpeg"

function CardSpeakers() {
    return(
    
        <div className="CardSpeakers">
            <img src={imagem} alt="" />
            <div className="textos">
                <h3>Brad Smith</h3>
                <p>President & Vice Chair</p>
                <p>Microsoft</p>
            </div>
        </div>

    )
}
export default CardSpeakers