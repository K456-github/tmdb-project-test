import React from 'react'
import { motion } from "framer-motion"
import Navbar from './components/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Mainpg from './components/Mainpg'
import Login from './components/Login'
import Signin from './components/Signin'

const App = () => {
  return (
    <div className='custombg'>
      <Navbar/>
      <div className="">
        <Routes>
       <Route path='/' element={<Mainpg/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App