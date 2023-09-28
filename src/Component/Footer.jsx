import { useState } from 'react'
import { AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {BiLogoWhatsappSquare} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Footer = () => {

    const year = new Date().getFullYear;

    const [subscribe, setSubscribe] = useState("");

    const submit = (e) => {
        e.preventDefault()
    };

  return (
    <div className='pt-[50vh] m-4'>
      <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>

            <div>
                <h6 className='font-bold uppercase pt-2'>Other Links</h6>
                <ul>
                    
                 <Link to='/about'>   <li className='py-1'>About</li></Link>
                <Link to='/services'> <li className='py-1'>Services</li></Link>
                <Link to='/booking'>    <li className='py-1'>Bookings</li></Link>
                    <div>
                        <h2 className='text-2xl font-bold pt-4'></h2>
                <p className='py-1 font-bold pt-3'></p>
            </div>



                    
                </ul>
            </div>

             <div>
                <h6 className='font-bold uppercase pt-2'>Opening Hours</h6>
                <ul>
                    <li className='py-1'>Mon-Wed: 9am to 8pm</li>
                    <li className='py-1'>Thurs: 10am to 8pm</li>
                    <li className='py-1'>Fri-Sat: 9am to 8pm</li>
                    <li className='py-1'>Tel:+2348107173669</li>
                    <li className='py-1'>Shop Address: #49 Obiwali,Rumuigbo Rd PH</li>
                </ul>
            </div>

            {/* <div>
                

            
            </div>  */}

          
            <div className='col-span-2 pt-8 mt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subcribe for ammazing offers</p>
                <p className='py-4'>The letest deals and disconts</p>

                <form className='flex flex-col sm:flex-row' onSubmit={{submit}}>
                    <input
                     type="email"
                     placeholder='Enter Email..'
                     className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold'
                     value={subscribe}
                     onChange={(e) =>setSubscribe(e.target.value)}
                      />
                      <button className='p-2 mb-4 bg-[#090f1f] rounded-2xl py-4' type='submit'>Subscribe</button>
                </form>
            </div>
            

        </div>

        <div className='-flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
             <p className='py-4'>@{year}Manny's Cut All rights reserved</p>
             <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <p>Follow us </p>
             <a href="https://www.tiktok.com/@mannys_cut1" target='blank' rel='noopener noreferrer'> <FaTiktok/> </a>
             <a href="https://wa.me/message/F5M6LKY65WSDO1" target='blank' rel='noopener noreferrer'> <BiLogoWhatsappSquare/> </a>
             <a href="https://www.instagram.com/mannyscuts_ph/?hl=en" target='blank' rel='noopener noreferrer'> <BsInstagram/> </a>

        
       
        </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
 