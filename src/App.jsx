// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Avaleht from './pages/Avaleht'
import Esindused from './pages//arrays/Esindused'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/lisa/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Kinkekaardid from './pages/Kinkekaardid'
import Kalkulaator from './pages/Kalkulaator'
import Menu from './components/Menu'
import ArraysHome from './pages/arrays/ArraysHome'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import Kasutajad from './pages/arrays/Kasutajad'
import HaldaHome from './pages/halda/HaldaHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HaldaHinnad from './pages/halda/HaldaHinnad'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaTooted from './pages/halda/HaldaTooted'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import LisaHome from './pages/lisa/LisaHome'
import LisaAuto from './pages/lisa/LisaAuto'
import LisaEsindus from './pages/lisa/LisaEsindus'
import LisaHind from './pages/lisa/LisaHind'
import LisaTootaja from './pages/lisa/LisaTootaja'
import LisaKasutaja from './pages/lisa/LisaKasutaja'
import MuudaAuto from './pages/muuda/MuudaAuto'
import MuudaEsindus from './pages/muuda/MuudaEsindus'
import MuudaHind from './pages/muuda/MuudaHind'
import MuudaTootaja from './pages/muuda/MuudaTootaja'
import MuudaToode from './pages/muuda/MuudaToode'
import MuudaKasutaja from './pages/muuda/MuudaKasutaja'
import YksAuto from './pages/yks/YksAuto'
import YksEsindus from './pages/yks/YksEsindus'
import YksHind from './pages/yks/YksHind'
import YksTootaja from './pages/yks/YksTootaja'
import YksToode from './pages/yks/YksToode'
import YksKasutaja from './pages/yks/YksKasutaja'
import { useState } from 'react'
import ApiHome from './pages/api/ApiHome'
import Books from './pages/api/Books'
import Cars from './pages/api/Cars'
import Countries from './pages/api/Countries'
import Supplier1 from './pages/api/Supplier1'
import Supplier2 from './pages/api/Supplier2'
import Supplier3 from './pages/api/Supplier3'
import Vocabulary from './pages/api/Vocabulary'
import Supplier1Details from './pages/api/Supplier1Details'



function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark-mode") === "true");

  function updateDarkMode(isDark) {
    setDark(isDark);
    localStorage.setItem("dark-mode", JSON.stringify(isDark));
    // setItem nõuab valueks stringi. 
  }

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <Menu />
      <button onClick={() => updateDarkMode(true)}>Dark</button>
      <button onClick={() => updateDarkMode(false)}>Light</button>

      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaardid /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/kalkulaator" element={ <Kalkulaator />} />

        <Route path="/arrays-home" element={ <ArraysHome/> } />
        <Route path="/autod" element={ <Autod /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/hinnad" element={ <Hinnad /> } />
        <Route path="/tootajad" element={ <Tootajad /> } />
        <Route path="/tooted" element={ <Tooted /> } />
        <Route path="/kasutajad" element={ <Kasutajad /> } />

        <Route path="/halda-home" element={ <HaldaHome/> } />
        <Route path="/halda-autod" element={ <HaldaAutod /> } />
        <Route path="/halda-esindused" element={ <HaldaEsindused /> } />
        <Route path="/halda-hinnad" element={ <HaldaHinnad /> } />
        <Route path="/halda-tootajad" element={ <HaldaTootajad /> } />
        <Route path="/halda-tooted" element={ <HaldaTooted /> } />
        <Route path="/halda-kasutajad" element={ <HaldaKasutajad /> } />

        <Route path="/lisa-home" element={ <LisaHome/> } />
        <Route path="/lisa-auto" element={ <LisaAuto/> } />
        <Route path="/lisa-esindus" element={ <LisaEsindus /> } />
        <Route path="/lisa-hind" element={ <LisaHind /> } />
        <Route path="/lisa-tootaja" element={ <LisaTootaja /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/lisa-kasutaja" element={ <LisaKasutaja /> } />

        <Route path="/muuda-auto/:index" element={ <MuudaAuto/> } />
        <Route path="/muuda-esindus/:index" element={ <MuudaEsindus /> } />
        <Route path="/muuda-hind/:index" element={ <MuudaHind /> } />
        <Route path="/muuda-tootaja/:index" element={ <MuudaTootaja /> } />
        <Route path="/muuda-toode/:index" element={ <MuudaToode /> } />
        <Route path="/muuda-kasutaja/:index" element={ <MuudaKasutaja /> } />

        {/* NB! */}
        <Route path="/auto/:nimi" element={ <YksAuto/> } />
        <Route path="/esindus/:keskus" element={ <YksEsindus /> } />
        <Route path="/hind/:n" element={ <YksHind/> } />
        <Route path="/tootaja/:nimi" element={ <YksTootaja /> } />
        <Route path="/toode/:nimi" element={ <YksToode /> } />
        <Route path="/kasutaja/:nimi" element={ <YksKasutaja /> } />

        <Route path="/api-home" element={ <ApiHome />} />
        <Route path="/books" element={ <Books />} />
        <Route path="/cars" element={ <Cars />} />
        <Route path="/countries" element={ <Countries />} />
        <Route path="/supplier1" element={ <Supplier1 />} />
        <Route path="/supplier2" element={ <Supplier2 />} />
        <Route path="/supplier3" element={ <Supplier3 />} />
        <Route path="/vocabulary" element={ <Vocabulary />} />
        <Route path="/supplier1-details/:id" element={ <Supplier1Details />} />

        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App
