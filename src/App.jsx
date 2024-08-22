import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx';
import Barra1 from "./images/Barra1.avif"
import Informations from './components/Infomations.jsx';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      {/* <img className='img' src={Barra1} alt="" /> */}
      <Informations></Informations>
    </>
  )
}

export default App
