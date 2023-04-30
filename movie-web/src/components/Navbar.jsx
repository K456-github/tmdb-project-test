import React from 'react'
import {GoSearch} from 'react-icons/go'
import {BiCameraMovie} from 'react-icons/bi'
import {MdOutlineAccountCircle} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='relative drop-shadow-2xl navbar '>
      <div className=" shadow  flex justify-around items-center customfonts ">
       <Link to={'/'}>
       <div className="flex items-center ">
        <h2 className='text-white ms-2 text-lg text-sm-sm'>Eiga Time</h2>
        <img src="./src/images/flim.png" className='w-[35px] ' alt=""/>
        </div>
       </Link>
        <div className="flex items-center">
        <input type="text" className='input2 bg- my-2 sm:max-w-sm mx-2 rounded w-36 h-7' />
        <GoSearch className=''/>
        </div>
        <div className="">
        <Link to={'/login'} className='flex items-center'>
        <h2 className='text-white px-2 text-lg text-sm-sm'>Log in</h2>
        <MdOutlineAccountCircle className='text-2xl text-white text-sm-xl'/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
