import { useState } from 'react'
import logo from '../assets/logo-1.jpg';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const toggle =()=>{
    setNav(!nav)
  };




  return (
    <div className='w-screen h-[70px] z-10 bg-[#fff] fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between items-center w-full h-full '>
        <div className='flex items-center'> 
        <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'> <img src={logo} className='w-8 h-10 mr-2' alt="logo" />Manny's Cut</h1>

        <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'>
                  <Link to='/'><li>Home</li></Link>    
                   <Link to='/about'> <li>About</li> </Link>
                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/book'><li>Bookings</li></Link>
                    <Link to='/footer'><li>Contact</li> </Link>
                  
                    
                  
                </ul>
        </div>

        <div className='hidden md:flex pr-4'>
             {/* <Link to='/login'> <button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-4  hover:bg-slate-900'>Login</button></Link>
           <Link to='/signup'><button className='border-none bg-black text-white  rounded-xl px-5 py-3 mr-43  hover:bg-slate-900'>Signup</button></Link>    */}
            </div>
            
            <div className='md:hidden mr-4' onClick={toggle}>
              {!nav ? (<FaBars/>) : (<FaTimes/>)}

            </div>
      </div>

      
      <ul className={!nav ? 'hidden' : ' w-[100%] px-8 bg-slate-900  '} onClick={toggle}>
         <Link to='/'>
          <li className='border-b-2 py-3 border-black-300 w-full text-white '>Home</li></Link>
         <Link to='/about'> <li className='border-b-2 py-3 border-black-300 w-full text-white '>About</li></Link>
         <Link to='/services'> <li className='border-b-2 py-3 border-black-300 w-full text-white'>Services</li></Link>
         <Link to='/book'> <li className='border-b-2 py-3 border-black-300 w-full text-white'>Bookings</li></Link>
         <Link to='/footer'></Link> <li className='border-b-2 py-3 border-black-300 w-full text-white'>Contact</li>

          <div className='flex flex-col my-4'>
              {/* <Link to='/login'><button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl  hover:bg-slate-900'>Login</button></Link>
            <Link to='/signup'>
               <button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl  hover:bg-slate-900'>Signup</button></Link>    */}
            </div>

        </ul>
    </div>
  )
}

export default NavBar
