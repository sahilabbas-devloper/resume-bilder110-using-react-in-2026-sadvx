import Home from "./components/Home"
import Resume from "./components/Resume"
import Hero from "./components/Hero"
import Header from "./components/Header"
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Hero' element={<Hero/>}/>
    <Route path='/Resume' element={<Resume />}/>
    <Route path='/Home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
