
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'



function App() {

 
  return (
    <>
 
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/agents' element={<Agents/>} />
    <Route path='/projects' element={<Projects/>} />
  </Routes>
    
    </>
  )

}

export default App
