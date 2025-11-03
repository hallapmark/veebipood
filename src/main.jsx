import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
// see on globaalne import. css faili ei saagi mitteglobaalselt importida

// import "../index.css" --> kõikidele failidele
// import MISKI from "KUSKILT" --> ainult selles failis

// import {MISKI} from "KUSKILT"; ----> tükk sellest moodulist
// import MISKI from "KUSKILT" --> terve see moodul (export default)
// aga vite kustutab kõik tükid mida ei kasutata reaalselt, nii et performance
// vahe pole

// import MISKI from "./" ---> meie failidest 
// import MISKI from "react" ---> node_module-st

// created with: npm create vite veebipood
// npm run dev

// URLi vahetuseks (navigeerimiseks):
// 1. npm i react-router-dom (node-modules kasuta sobilikud koodifailid)
// 2. import { BrowserRouter } (võtame sealtsamast installitud kaustast BrowserRouteri)
// 3. ümbritseme App.jsx faili BrowserRouteriga (anname tervele rakendusele navigeerimisvõimekuse)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


// teemad on kursusel olnud seni
// 1. react projekti tegemine, navigeerimine, usestate algus
// 2. useState edasi, useRef
// 3. dünaamiline CSS, firebase, toastify
// 4. arrays, sort, filter, halda 
// 5. objektid, lisamine, kokkuarvutus