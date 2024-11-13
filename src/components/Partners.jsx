import CardPartners from "./cards/CardPartnes"
import "./Partners.css"

function Partners() {
    const listPartners = ['https://cdn-icons-png.flaticon.com/128/16021/16021158.png',
        'https://cdn-icons-png.flaticon.com/128/6033/6033716.png',
        'https://cdn-icons-png.flaticon.com/128/16183/16183597.png',
        'https://cdn-icons-png.flaticon.com/128/5977/5977589.png',
        "https://cdn-icons-png.flaticon.com/128/349/349228.png",
        'https://cdn-icons-png.flaticon.com/128/2585/2585161.png',
        "https://cdn-icons-png.flaticon.com/128/0/747.png",
        'https://cdn-icons-png.flaticon.com/128/16183/16183626.png',
        'https://cdn-icons-png.flaticon.com/128/5968/5968830.png',
    ]
    return (
        // <div className="Partners">
        //     <h3>Some partners from our 2024 events:</h3>
        //     <div className="Logos">
        //     </div>
        // </div>
        <div className="w-full bg-sky-600/80 py-8" >
            <h2 className="font-bold text-black text-3xl w-11/12 mx-auto lg:text-5xl text-center font-serif lg:py-16">Some partners from our 2024 events:</h2>
            <div className="flex w-full lg:w-10/12 flex-wrap justify-center lg:justify-normal  mx-auto ">
                {listPartners.map((item) => (<CardPartners image={item}></CardPartners>))}
                {listPartners.map((item) => (<CardPartners image={item}></CardPartners>))}
            </div>
        </div>
    )
}
export default Partners