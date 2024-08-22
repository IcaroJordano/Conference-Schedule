import "../components/Information.css"
import Information from "../images/Infomation.avif"

function Informations() {
    return(
        <div className="Informations">
            <h2>What is Nairobi?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque mollitia, ullam rem accusamus est consequatur non reiciendis tempore ut sequi error consequuntur ipsa. Debitis veniam dicta voluptatibus? Molestiae, iusto. <br></br><br></br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis nulla culpa iste doloribus, ipsum dolor pariatur labore! Officiis excepturi totam adipisci natus vitae sint alias et sunt dolorem illum.</p>
            <img src={Information} alt="" />
        </div>
    )
}
export default Informations