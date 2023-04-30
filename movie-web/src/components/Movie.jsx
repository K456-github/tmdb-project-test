import React from 'react'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'

const Movie = ({title,backdrop_path}) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <motion.div layout>
      <AnimatePresence>
        <div className="cursor-pointer ">
       <img src={"https://image.tmdb.org/t/p/w400" +backdrop_path} className='rounded-lg shadow-lg' alt="" />
        <p className='font-semibold p-2 text-white customfonts text-center'>{title}</p>
        </div>
        </AnimatePresence>
    </motion.div>
    </div>
  )
}

export default Movie