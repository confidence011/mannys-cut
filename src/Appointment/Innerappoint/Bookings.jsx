import React, { useState } from 'react';
//import './App.css'; // You would set up your Tailwind CSS in your project

function Bookings() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedAppointment, setSelectedAppointment]= useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value)
  };

  const handleTel = (event) => {
    setTel(event.target.value)
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  

  const handleRoomChange = (event) => {
    setSelectedAppointment(event.target.value);
  };

  const handleBooking = () => {
    // Here, you can implement the booking functionality, e.g., send a request to a server.
    alert(`Booking request  ${selectedAppointment}  ${selectedDate} has been sent.`);
  };

  return (
    <div className="container mx-auto p-20">

      <h1 className="text-2xl font-bold mb-4">Book Your Appointment With Us Today</h1>

      <div className="mb-4">

      <label className="block mb-2" htmlFor="text">Your Name:</label>
      <input 
        className='p-2 border border-gray-300 rounded'
      type="text" 
        value={name}
        onChange={handleNameChange}
        required />

<label className="block mb-2" htmlFor="text">Your Tel:</label>
      <input 
        className='p-2 border border-gray-300 rounded'
      type="text" 
        value={tel}
        onChange={handleTel}
        required />

        <label className="block mb-2" htmlFor="date">Select Date:</label>

        <input
        className="p-2 border border-gray-300 rounded"
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="Appointment">Selecct Appointment:</label>
        <select
          id="Appointment"
          value={selectedAppointment}
          onChange={handleRoomChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select appointment</option>
          <option value="Braiding">Braiding</option>
          <option value="Hair Installation">Hair Installation</option>
          <option value="Hair Cut">Hair Cut</option>
          <option value="Acrylic and gel nails">Acrylic and gel nails</option>
          <option value="Pedicure">Pedicure</option>
          <option value="Hair Tinting">Hair Tinting</option>
          <option value="Facial">Facials</option>
        </select>
      </div>

      <button
        onClick={handleBooking}
        className="bg-black text-white p-2 rounded hover:bg-slate-900"
      >
        Book Now
      </button>
    </div>
  );
}

export default Bookings;










// import {useState} from 'react'


// const Bookings = () => {

//   const [name, setName] = useState('');
//   const [date, setDate] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };
//   if (setDate === '') {
//     alert('please select a date')
//     return;
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     console.log('Name:', name);
//     console.log('Date:', date);
//   };





//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-2xl font-bold mb-4 uppercase">Book Your Appointment</h2>

//       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded">
//        <label>Appointment</label>
//        <select className='lg:w-[300px] md:w-full border-gray-300 p-2'> 
//         <option >Braiding</option>
//         <option >Hair Installation</option>
//         <option >Hair Cut</option>
//         <option >Acrylic and Gel Nails</option>
//         <option >Pedicure</option>
//         <option >Hair Tinting</option>
//         <option >Facials</option>
//        </select>
//         <label className="mb-4 ">
//           Name/appointment:
//           <input
//             type="text"
//             value={name}
//             onChange={handleNameChange}
//             className="border border-gray-300 p-8 rounded"
//           />
//         </label>
//         <label className="mb-4 text-center">
//            Date :
//           <input
//             type="date"
//             value={date}
//             onChange={handleDateChange}
//             className="border border-gray-300 p-8 rounded "
//           />
//         </label>
//       </form>

//       <button
//           type="submit"
//           className="bg-blue-500 text-white py-3 px-6 rounded-lg"
//         >
//           Book Now
//         </button>
//     </div>

//   )
// }

// export default Bookings
