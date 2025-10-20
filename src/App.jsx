import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import Avaleht from './pages/Avaleht'
import Esindused from './pages/Esindused'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Kinkekaardid from './pages/Kinkekaardid'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <Link to="/">
         <img className="pilt" src="https://picsum.photos/200/300" alt="" />
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaart</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaardid /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/*" element={ <NotFound /> } />

      </Routes>
    </>
  )
}

export default App
