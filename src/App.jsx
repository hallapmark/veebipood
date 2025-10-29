// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Avaleht from './pages/Avaleht'
import Esindused from './pages/Esindused'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
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

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaardid /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/kalkulaator" element={ <Kalkulaator />} />
        <Route path="/*" element={ <NotFound /> } />

        <Route path="/arrays-home" element={ <ArraysHome/> } />
        <Route path="/autod" element={ <Autod /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/hinnad" element={ <Hinnad /> } />
        <Route path="/tootajad" element={ <Tootajad /> } />
        <Route path="/tooted" element={ <Tooted /> } />
        <Route path="/kasutajad" element={ <Kasutajad /> } />
      </Routes>
    </>
  )
}

export default App
