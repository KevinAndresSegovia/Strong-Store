import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje={"Soy el Item List Container"} />
    </div>
  )
}

export default App
