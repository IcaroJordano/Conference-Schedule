import "../components/Home.css"
import home from "../images/Infomation.avif"

function Home() {
    return (
        <div  className="lg:flex pt-20" style={{backgroundColor:'#060e2e'}}>
            <div className="lg:w-1/2 text-neutral-100 flex flex-col items-end">
                <h1 className="mt-5 font-semibold text-center lg:text-center text-3xl lg:text-4xl mx-auto   lg:w-9/12  w-11/12 mb-5" >Conference on <span>Figma</span>, Creative Design, and Artificial Inteligence!</h1>
                <div className="w-max lg:w-9/12  mx-auto  text-xl flex flex-col items-center space-y-5 p-10 lg:px-5 lg:py-5 rounded-xl ">
                    <h2><span>O</span> Where? When? What time?</h2>
                    <p><span>Kyiv, Palace of Culture</span></p>
                    <div className="flex space-x-5">
                        <p href="">15-16.04.2025</p>
                        <p href="">Start at 10:00</p>
                    </div>
                </div>
                <div className="flex w-full lg:w-8/12 mx-auto lg:my-10    justify-between  lg:justify-center flex-col lg:flex-row  font-bold space-y-5 lg:space-y-0 lg:space-x-5 items-center my-5">
                    <a className="w-11/12 lg:w-6/12 bg-pink-600 rounded-md  h-12 flex justify-center items-center" >Book tickets for 2025</a>
                    <a className="w-11/12 lg:w-6/12 bg-teal-600 rounded-md  h-12 flex justify-center items-center" id="second">Partner with us</a>
                </div>
            </div>
            <img className=" object-cover lg:w-1/2" src={home} alt="" />
        </div>
    )
}
export default Home