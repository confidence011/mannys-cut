import React from 'react'

const Homep2 = () => {
  return (
    <div className='w-full my-8'>
    <div className='max-w-[1240px] mx-auto'>

      <div className='text-center py-8'>
         <h2 className='text-5xl font-bold py-4 '>  Trusted Services </h2>
         {/* <p className='text-3xl py-6 text-gray-600'>Transform images and videos to load faster with no visual degradation, automatically generate image and video variants, and deliver high quality responsive experiences to increase conversions.</p> */}
      </div>

      <div className='grid grid-cols-1 px-2 pt-4 text-center gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>

          <div className='border py-8 rounded-xl shadow-2xl'>
             <p className='text-6xl font-bold text-indigo-600'> 100%</p>
             <p className='text-gray-400 mt-2 font-bold'> Satisfaction</p>
          </div>

          <div className='border py-8 rounded-xl shadow-2xl'>
             <p className='text-6xl font-bold text-indigo-600'>24/7</p>
             <p className='text-gray-400 mt-2 font-bold'>Services</p>
          </div>

          <div className='border py-8 rounded-xl shadow-2xl'>
             <p className='text-6xl font-bold text-indigo-600'>100k</p>
             <p className='text-gray-400 mt-2 font-bold'> Transactions</p>
          </div>

      </div>


    </div>
  </div>
     )
}

export default Homep2
