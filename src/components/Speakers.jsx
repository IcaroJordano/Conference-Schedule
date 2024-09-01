import "./Speakers.css"
import CardSpeakers from "/home/icaro/Área de trabalho/50-Projects/2-Conference-Shedule/src/components/cards/CardSpeakers.jsx"

function Speakers() {
    const listSpeakers=["https://web-summit-avenger.imgix.net/production/avatars/original/c71cf9ec49fa5b227ed014e7c2cc096160e4e362.jpeg?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300",
        "https://web-summit-avenger.imgix.net/production/avatars/original/52f801e4b43b361d459b3ea6bd4d31622a6ee4b9.jpg?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300",
        'https://web-summit-avenger.imgix.net/production/avatars/original/a1d2ef74be786ca41a775d9e8c20d2c8e475c4cd.jpg?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300',
        'https://web-summit-avenger.imgix.net/production/avatars/original/52e9943600761a1ea310a46cdd9b86f363c2daa5.png?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300',
        'https://web-summit-avenger.imgix.net/production/avatars/original/e64fede10edd0d922660312e97a5f031998ece44.png?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300',
    "https://web-summit-avenger.imgix.net/production/avatars/original/938a128c0dd2cf7dd6f3fc4a7915ca9442bcbae7.png?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300",
'https://web-summit-avenger.imgix.net/production/avatars/original/63c03a0535b734f8ed2f078c828ccc3bafbdf736.jpeg?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300',
"https://web-summit-avenger.imgix.net/production/avatars/original/319d6a10f72c17977b0c2f4a45edc2ecc2f2187a.jpg?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=300&h=300"]
    return(
        <div className="Speakers">
            <h2>Meet our first speakers</h2>
            {listSpeakers.map((item)=>(<CardSpeakers image={item}></CardSpeakers>))}
        </div>
    )
}
export default Speakers