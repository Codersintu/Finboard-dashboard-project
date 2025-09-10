import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Widgetcard from './component/Home/Widgetcard'
import Home from './component/Home/Home'

function App() {
  const [open,setOpen]=useState(false)
  
  return (
    <>
      <Navbar setOpen={setOpen} open={open}/>
      <Home />
      <Widgetcard setOpen={setOpen} open={open}/>
    </>
  )
}

export default App
