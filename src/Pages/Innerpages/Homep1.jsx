import React from 'react'
import img from '../../assets/salon img.jpg'
import { Link } from 'react-router-dom'

const Homep1 = () => {
  return (
    <div className='w-full h-[100%] pt[10vh] bg-[#F3F3EB] flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
  
            <h1 className='pt-10 text-4xl md:text-6xl font-bold'>Manny's</h1>
            <h1 className='text-4xl md:text-6xl font-bold'>Cut</h1>
            <p className='pt-3 text-2xl '>Live in style</p>
            <p className='text-2xl'>Unique and Excellent services</p>
          
           {/* <button className='py-6 px-6 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Get Started</button> */}

          <Link to='/services'><button className='py-3 px-6 sm:w-[60%] my-4 bg-black text-white rounded-xl hover:bg-slate-900'> Book Now</button></Link>
           
           
            
        </div>
        <div>
        <img src={img} alt="img" className='w-[100%] '/>
        </div>

    </div>

  
</div>
  )
}

export default Homep1
