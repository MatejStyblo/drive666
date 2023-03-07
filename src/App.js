import React, {useEffect,useState} from "react"
import Navbar from "./Components/Navbar/Navbar.js"
import Main from "./Components/Main/Main"
import Cenik from "./Components/Ceník/Cenik"
import Galerie from "./Components/Galerie/Galerie"
import Footer from "./Components/Footer/Footer"
import Kontakt from "./Components/Kontakt/Kontakt"
import JakNaTo from "./Components/JakNaTo/JakNaTo"
import {BrowserRouter, Route ,Routes} from "react-router-dom"
import ReactGa from "react-ga"
import './App.css';
function App() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const handleClick = event => {
    setOpen(current => !current);
  };
  useEffect(() => {
ReactGa.initialize("UA-216583727-1")  

    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  
  return (
    <div className="App">
      <div className='Content'>
      <BrowserRouter>
  {/*     <div className={
               open
               ? `closed  `
               : `lightbox`
            }>
      <div className="iframeContainer">
      <span className={open ? 'closed' : 'closeLB'} onClick={handleClick}>x</span>
<h1 className="reason">Do 28.8.2022 zavřeno ze zdravotních důvodu. Děkujeme za pochopení.
</h1>
    </div>
</div> */}
  <Navbar/>
  <Routes>
  <Route path="/"element={<Main/>} />
  <Route path="/cenik"element={<Cenik/>} />
  <Route path="/jak-na-to"element={<JakNaTo/>} />
  <Route path="/nase-prace"element={<Galerie/>} />
  <Route path="/kontakt"element={<Kontakt/>} />
 

  </Routes>
      </BrowserRouter>
      
    </div><Footer/></div>
  );
}

export default App;
