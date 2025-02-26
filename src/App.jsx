import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero"
import Footer from './components/Footer/Footer';
import Filters from './components/Filters/Filters';
import "./App.scss";


function App() {

  return (
    <>
    <Header></Header>
    <Filters/>
    <Hero></Hero>
    
    <Footer/>
     </>
  )
}

export default App
