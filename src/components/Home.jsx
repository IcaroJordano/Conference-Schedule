import "../components/Home.css"
import home from "../images/home.jpg"

function Home() {
    return(
        <div className="Home">
            <h1>Conference on <span>Figma</span>, Creative Design, and Artificial Inteligence!</h1>
            <div className="Card">
                <h2><span>O</span> Where? When? What time?</h2>
                <p><span>Kyiv, Palace of Culture</span></p>
                <div className="date">
                    <span><p>15-16.04.2024</p></span>
                    <span><p>Start at 10:00</p></span>
                </div>
            </div>
            <img src={home} alt="" />
            <button >Book tickets</button>
            <button id="second">Partner with us</button>
        </div>
    )
}
export default Home