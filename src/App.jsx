import React from 'react'
import './App.css';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import OurBookings from './Appointment/Innerappoint/OurBookings';
import Firstservice from './Service/Serviceinnerpages/Firstservice';
// import Log from './Component/Innerlog/log';
// import Signup from './Log/Inner/Signup';
import Homme from './Pages2/Aboutpage/Homme';


const App = () => {
  return (
    <Router>

      <NavBar/>
<Routes>
  <Route path='/home' element={<Homme/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<Firstservice/>}/>
  <Route path='/Bookings' element={<OurBookings/>}/>
  <Route path='/contact' element={<Footer/>}/>
  {/* <Route path='/login' element={<Log/>}/> */}
  {/* <Route path='/signup' element={<Signup/>}/> */}
  <Route path='/book' element={<OurBookings/>}/>



</Routes>

      <Footer/>

    </Router>
  )
}

export default App

