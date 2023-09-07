import './App.css'
import {Route, Routes} from "react-router-dom"
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Detail from './components/Detail'
import CrearDriver from './components/Form'

function App() {
  return (
 <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/driver/:id" element={<Detail/>}/>
    <Route path="/crearDriver" element={<CrearDriver/>}/>

 </Routes>
  )
}

export default App
