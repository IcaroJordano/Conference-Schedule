import "../cards/CardSpeakers.css"
import imagem from "/home/icaro/Área de trabalho/50-Projects/2-Conference-Shedule/src/images/images.jpeg"
import { faker } from '@faker-js/faker';

function CardSpeakers( {image}) {
    return(
    
        <div className="CardSpeakers">
            <img src={image} alt="" />
            <div className="textos">
                <h3>{faker.person.fullName()}</h3>
                <p>{faker.person.jobTitle()}</p>
                <p>{faker.company.name()}</p>
            </div>
        </div>

    )
}
export default CardSpeakers