
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function App() {

useGSAP(() => {
  gsap.from('.stair', {
      height:0,
      stagger:{
        amount:-0.3
      }

  })
})
  return (
    <>
    <div className='h-screen w-full flex fixed z-20 top-0' >
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
    </div>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/agents' element={<Agents/>} />
    <Route path='/projects' element={<Projects/>} />
  </Routes>
    
    </>
  )

}

export default App
