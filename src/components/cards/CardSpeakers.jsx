import "../cards/CardSpeakers.css"
import imagem from "/home/icaro/Área de trabalho/50-Projects/2-Conference-Shedule/src/images/images.jpeg"
import { faker } from '@faker-js/faker';

function CardSpeakers( {image}) {
    return(
    
        <div className="bg-white rounded-xl m-4 w-5/12 lg:w-52 lg:h-72">
            <img className="lg:h-52 h-48  object-cover w-full rounded-t-xl  "  src={image} alt="" />
            <div className="text-sm   text-nowrap overflow-clip pl-2 pt-2 py-3" >
                <h3 className="font-bold">{faker.person.fullName()}</h3>
                <p>{faker.person.jobTitle()}</p>
                <p>{faker.company.name()}</p>
            </div>
        </div>

    )
}
export default CardSpeakers