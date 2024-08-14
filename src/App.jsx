// import { useState } from 'react'
import './App.css'

function App() {
  const anoAtual = new Date().getFullYear()

  return (
    <>
      <div>
        <h2>Sistemas:</h2>
        <a href="http://kadeshpedidos.com.br/login">
          Kadesh Pedidos Externos &#10138;
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className="read-the-docs">
        Kadesh &copy; {anoAtual}
      </p>
    </>
  )
}

export default App
