import "./Contact.css"
function Contact() {
    return (
        <div className=" lg:justify-around flex lg:flex-row flex-col w-full py-10" style={{backgroundColor:'#060e2e'}}>
            <div className="lg:w-5/12 flex text-white font-bold pt-20 justify-end">
                <h3 className="text-4xl lg:w-10/12 pl-8">Download the Web Summit overview</h3>
            </div>
            <div className="lg:w-5/12 w-full py-14 text-sm pl-8  text-white flex flex-col">
                <label className="mb-2" htmlFor="email">Work email *</label>
                <input className="mb-8 p-4 rounded-md w-11/12 lg:w-9/12" type="email" name="email" placeholder="user@examble.com" />
                <label className="mb-2" htmlFor="name">First name *</label>
                <input className="mb-8 p-4 rounded-md w-11/12 lg:w-9/12" type="text" name="name" placeholder="First namer" />
                <input className="bg-neutral-200 w-11/12 lg:w-4/12 p-4 text-neutral-800/60 rounded-md font-semibold " type="submit" value="Download overview"  />

            </div>
        </div>
    )
}
export default Contact