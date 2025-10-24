import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
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
