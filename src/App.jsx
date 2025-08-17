import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import NonAuthNavbar from './Component/NonAuthNavbar/NonAuthNavbar'
import HomePage from './pages/Home/HomePage'
import MenuPage from './pages/Menu/MenuPage'
import LogginPage from './pages/Login/LogginPage'
import Signuppage from './pages/Signup/Signuppage'

import './App.css'


function App() {
 

  return (
    <div className='container'>
    <BrowserRouter>
    <NonAuthNavbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/menu' element={<MenuPage/>} />
    <Route path='/login' element={LogginPage}/>
    <Route path='/signup' element={Signuppage}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
