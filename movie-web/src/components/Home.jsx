import React, { useEffect, useState } from 'react'
import Filtermovie from './Filtermovie'
import Movie from './Movie'
import { motion } from "framer-motion"
import Intro from './Intro'
import 'animate.css';



const Home = () => {
  const [popular,setpopular] = useState([])
  const [filtered,setfiltered] = useState([])
  const [activeGenre,setactiveGenre] = useState([0])

useEffect(()=> {
  fetchpopular()
},[])

  const fetchpopular = async () => {
    const api = await fetch (`
    https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&page=1`)
    const {results} = await api.json()
    setpopular(results)
    setfiltered(results)
  }
  return (
    <div className="custombg animate__animated animate__fadeIn">
      <Intro/>
     <div className="mx-5  ">
     <Filtermovie filtered={filtered} setfiltered={setfiltered} activeGenre={activeGenre} setactiveGenre={setactiveGenre} popular={popular}/>
      <motion.div layout className='flex flex-wrap justify-center gap-10 mt-10 '>
      
      {filtered.map(movie => {
        return(
          <div className="card">
            <Movie key={movie.id} {...movie}/>
            <div className="flex justify-center items-center">
            <button className='cardbtn iii'>Detail</button>
            </div>
          </div>
        )
      })}
    </motion.div>
     </div>
    </div>
  )
}

export default Home