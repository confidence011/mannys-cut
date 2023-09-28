import React from 'react'
import logo from '../../assets/logo-1.jpg'

const Aboutpg = () => {
  return (
    <div className='w-full mt-2'>

    <div className='w-full h-[700px] bg-gray-900/90 absolute'>
      <img src={logo} alt="img" className='w-full h-full object-cover mix-blend-overlay' />
    </div>
 
    <section className='max-w-[1240px] mx-auto text-white relative'>
       
    <div className='px-4 py-12'>
         <h2 className='text-4xl pt-8 text-slate-300 uppercase text-center'>About Us</h2> 
        <h3 className='text5xl font-bold py-6 text-center'></h3>
        <p className='py-4 text-2xl text-slate-300'>Manny's Cut Salon is a premium salon with variety of beauty services to men and women. We focus on the unique desires and needs of our dear esteemed customers, making us the most versatile salon in Nigeria. We offer professional services, experiences and results above and beyond expectations. Also, we have a team of experts dedicated to helping people look and feel their best.</p>
        </div>
        </section>
    

 </div>
  )
}

export default Aboutpg
