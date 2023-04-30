import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineGoogle} from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'
import Signin from './Signin'
import {CiLogin} from 'react-icons/ci'
import {MdOutlineArrowBack} from 'react-icons/md'
import 'animate.css';

const Login = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <div className="h-screen flex justify-center items-center  ">
    <form className='rounded-xl mx-3 max-h-[500px] '>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button className='hover:bg-[#3c3c3c] btn'>
            <div className="flex justify-center items-center">
            <p className='text-black hover:text-white'>Log In</p>
            </div>
        </button>
        {/* <div class="flex items-center justify-around py-4 cursor-pointer">
          <div class="flex items-center">
            <AiOutlineGoogle className='text-xl'/>
            <h2 className='px-2'>Google</h2>
        </div>
          <div class="flex items-center">
            <FaFacebook className=''/>
            <h2 className='px-2'>Facebook</h2>
            </div>
        </div> */}
        <div className="text-md flex items-center justify-around py-3">
            <h2 className='socialitem '>Didn't Have An Account?</h2>
            <Link to={'/signin'}>
            <p className=' socialitem'>Sign in</p>
            </Link>
        </div>
        <Link to={"/home"}>
            <div className="inline-block hover:scale-125">
              <div className="text-2xl text-white">
                <MdOutlineArrowBack />
              </div>
            </div>
          </Link>
    </form>
        </div>
    </div>
  )
}

export default Login