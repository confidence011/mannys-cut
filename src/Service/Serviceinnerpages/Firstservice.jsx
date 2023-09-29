import React from 'react'
// import salon from '../../assets/salon img.jpg';
 import frontal2 from '../../assets/frontal2.webp'
  import lowcut from '../../assets/Lowcut.jpg'
  import tint2 from '../../assets/tint2.webp'
 import ff from '../../assets/facial.jpg'
 import {Link} from 'react-router-dom'
//import manny from '../../assets/manny.jpg'
import ooo from '../../assets/ooo.webp'
import nail3 from '../../assets/nail3.jpg'
import mani from '../../assets/massage-foot.jpg'
import lock22 from '../../assets/lock222.jpeg'


const Firstservice = () => {
  return (
    <div className='w-full '>
      <div className='max-w-[1240px] mx-auto px-2 '>


        <h2 className='text-5xl font-bold text-center p-16 pb-1'> Our services </h2>
        <p className='text-2xl py-8 text-gray-500 text-center'> We Render Exclusive Services  </p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>

                <div className='flex'>
                    
                  <div className='w-7 mr-4 text-green-600'>
                      
                    </div>

                    <div>
                    <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Braiding</h3>
                    {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                    <img src={ooo} className='' alt="braid" />
                    <Link to='/book'><button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                    </div>    

                </div>

                <div className='flex'>
                    
                  <div className='w-7 mr-4 text-green-600'>
                      
                    </div>

                    <div>
                    <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Hair Installation</h3>
                    {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                    <img src={frontal2} className='' alt="braid" />
                    <Link to='/book'>
                    <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                    </div>    

                </div>


                <div className='flex'>
                    
                  <div className='w-7 mr-4 text-green-600'>
                    
                    </div>

                    <div>
                    <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Hair Cut</h3>
                    {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                    <img src={lowcut} className='' alt="braid" />
                    <Link to='/book'>
                    <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                    </div>    

                </div>


                <div className='flex'>
                    
                  <div className='w-7 mr-4 text-green-600'>
                      
                    </div>

                    <div>
                    <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Acrylic and gel nails</h3>
                    {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                    <img src={nail3} className='' alt="braid" />
                    <Link to='/book'>
                    <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Book</button></Link>
                    </div>    

                </div>


                <div className='flex'>
                    
                  <div className='w-7 mr-4 text-green-600'>
                      
                    </div>

                    <div>
                    <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Pedicure </h3>
                    {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                    <img src={mani} className='' alt="braid" />
                    <Link to='/book'>
                    <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                    </div>    

                </div>

                <div className='flex'>
                    
                  <div className='w-7 mr-4 text-green-600'>
                      
                    </div>

                    <div>
                    <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Hair tinting</h3>
                    {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                    <img src={tint2} className='' alt="braid" />
                    <Link to='/book'>
                    <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                    </div>    

                </div>

                {/* <div className='flex'>
                    
                    <div className='w-7 mr-4 text-green-600'>
                        
                      </div>
  
                      <div>
                      <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> hair washing</h3> */}
                      {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                      {/* <img src={wash} className='' alt="braid" />
                      <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Appointment</button>
                      </div>    
  
                  </div> */}

                  {/* <div className='flex'>
                    
                    <div className='w-7 mr-4 text-green-600'>
                        
                      </div>
  
                      <div>
                      <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> male braids</h3> */}
                      {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                      {/* <img src={men} className='' alt="braid" />
                      <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Appointment</button>
                      </div>    
  
                  </div> */}

                  <div className='flex'>
                    
                    <div className='w-7 mr-4 text-green-600'>
                        
                      </div>
  
                      <div>
                      <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> facials</h3>
                      {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                      <img src={ff} className='' alt="braid" />
                      <Link to='/book'>
                      <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                      </div>    

  
                  </div>

                  <div className='flex'>
                    
                    <div className='w-7 mr-4 text-green-600'>
                        
                      </div>
  
                      <div>
                      <h3 className='font-bold text-2xl text-center pt-1 pb-2 uppercase'> Dreadlock</h3>
                      {/* <p className='text-lg pt-2 pb-4'> In today's digital economy, brands and businesses must deliver visually rich media experiences across all digital channels to meet the expectations of modern consumers</p> */}
                      <img src={lock22} className='' alt="braid" />
                      <Link to='/book'>
                      <button className='py-3 px-3 sm:w-[60%] my-4 bg-black text-white rounded-lg hover:bg-slate-900'>Book Now</button></Link>
                      </div>    

  
                  </div>

                  

                





             </div>
         
      </div>
    </div>
  )

   }


export default Firstservice
