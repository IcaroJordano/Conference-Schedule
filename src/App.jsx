import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx';
import Barra1 from "./images/information.jpg"
import Informations from './components/Infomations.jsx';
import Informations2 from './components/Infomations2.jsx';
import Speakers from './components/Speakers.jsx';
import Partners from './components/Partners.jsx';
import Hotel from './components/Hotel.jsx';
import Contact from './components/Contact.jsx';
import Information from "./images/home.jpg"
import Footer from './components/Footer.jsx';
import Information2 from "./images/Information3.avif"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Informations image={Information}></Informations>
      <Speakers></Speakers>
      <Informations reverse={true} image={Information2}></Informations>
      {/* <Informations2 ></Informations2> */}
      <Partners></Partners>
      <Hotel></Hotel>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
