
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

function App() {

  const stairRef = useRef(null)


  useGSAP(() => {

    const tl = gsap.timeline()

    tl.from('.stair', {
      height:0,
      duration:1,
      stagger:{
        amount:-0.25
      }

    })
    tl.to('.stair', {
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairRef.current, {
      display:'none'
    })
  })


  return (
    <>

     <div ref={stairRef} className='h-screen w-full fixed z-10 top-0' >
      <div className='h-full w-full  flex'>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
    </div>
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
