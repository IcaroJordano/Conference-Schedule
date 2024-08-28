import "./Contact.css"
function Contact() {
    return(
        <div className="Contact">
            <h3>Download the Web Summit overview</h3>
            <label htmlFor="email">Work email*</label>
            <input type="email" name="email" placeholder="user@examble.com" />
            <label htmlFor="name">First name*</label>
            <input type="text" name="name" placeholder="First namer" />
            
            <input type="submit" value="Download overview" className="submit" />
        </div>
    )
}
export default Contact