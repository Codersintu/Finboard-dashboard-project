import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Widgetcard from './component/Home/Widgetcard'
import Home from './component/Home/Home'
import { RecoilRoot } from 'recoil'

function App() {
  const [open,setOpen]=useState(false)
  
  return (
    <RecoilRoot>
      <Navbar setOpen={setOpen} open={open}/>
      <Home />
      <Widgetcard setOpen={setOpen} open={open}/>
    </RecoilRoot>
  )
}

export default App
