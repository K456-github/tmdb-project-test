import React, { useEffect } from 'react'

const Filtermovie = ({popular,filtered,setfiltered,activeGenre,setactiveGenre}) => {

  useEffect(() => {
    if (activeGenre ===0){
      setfiltered(popular)
      return;
    }
    const moviefiltered  = popular.filter((movie) => 
    movie.genre_ids.includes(activeGenre)
  );
  setfiltered(moviefiltered)
  },[activeGenre])


  return (
    <div className='flex justify-around pt-6 cursor-pointer customfonts'>
        <button onClick={()=> setactiveGenre(0)} className='bg-[#DAC8BE] rounded shadow-md hover:bg-[#c09778] text-black font-bold px-6 py-1'>All</button>
        <button onClick={()=> setactiveGenre(28)} className='bg-[#DAC8BE] rounded shadow-md hover:bg-[#c09778]  text-black font-bold px-6 py-1'>Action</button>
        <button onClick={()=> setactiveGenre(35)} className='bg-[#DAC8BE] rounded shadow-md hover:bg-[#c09778] text-black font-bold px-6 py-1'>Comedy</button>
    </div>
  )
}

export default Filtermovie