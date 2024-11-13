// import "../components/Information.css"

function Informations({image,reverse}) {
    return (
        <div className={`py-10 flex lg:flex lg:w-full justify-around items-center ${reverse?'flex-col-reverse lg:flex-row-reverse':'flex-col lg:flex-row'}`} >
            <div className={`lg:w-5/12  pl-4 ${reverse?'lg:pl-0':'lg:pl-24'}`}>
                <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-10" >What is Nairobi?</h2>
                <p className={`${reverse?'w-11/12':'w-full'} text-lg`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque mollitia, ullam rem accusamus est consequatur non reiciendis tempore ut sequi error consequuntur ipsa. Debitis veniam dicta voluptatibus? Molestiae, iusto. <br></br><br></br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis nulla culpa iste doloribus, ipsum dolor pariatur labore! Officiis excepturi totam adipisci natus vitae sint alias et sunt dolorem illum.</p>
            </div>
            <div className="lg:w-5/12 w-10/12 mx-auto my-8">
                <img className=" rounded-2xl" src={image} alt="" />
            </div>
        </div>
    )
}
export default Informations