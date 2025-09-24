import { useState } from 'react'
import './App.css'
import Header from './MainPageComponents/header'
import Presentation from './MainPageComponents/presentation'
import ArcHeader from "./AddComponents/ArcHeader";

function App() {


  return (
    <>
      <ArcHeader/>
      {/* <Header/> */}
      <Presentation/>
    </>
  )
}

export default App
