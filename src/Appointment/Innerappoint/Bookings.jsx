// import React, { useState } from 'react';
// //import './App.css'; // You would set up your Tailwind CSS in your project

// function Bookings() {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedAppointment, setSelectedAppointment]= useState('');
//   const [name, setName] = useState('');
//   const [tel, setTel] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value)
//   };

//   const handleTel = (event) => {
//     setTel(event.target.value)
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };
  

//   const handleRoomChange = (event) => {
//     setSelectedAppointment(event.target.value);
//   };

//   const handleBooking = () => {
//     // Here, you can implement the booking functionality, e.g., send a request to a server.
//     alert(`Booking request  ${selectedAppointment}  ${selectedDate} has been sent.`);
//   };

//   return (
//     <div className="container mx-auto p-20">

//      <form className=''>

//       <h1 className="text-2xl font-bold mb-4">Book Your Appointment With Us Today</h1>


//       <div className="mb-4">

       

//       <label className="block mb-2" htmlFor="text">Your Name:</label>
//       <input 
//         className='p-2 border border-gray-300 rounded'
//       type="text" 
//         value={name}
//         onChange={handleNameChange}
//         required />

// <label className="block mb-2" htmlFor="text">Your Tel:</label>
//       <input 
//         className='p-2 border border-gray-300 rounded'
//       type="text" 
//         value={tel}
//         onChange={handleTel}
//         required />

//         <label className="block mb-2" htmlFor="date">Select Date:</label>

//         <input
//         className="p-2 border border-gray-300 rounded"
//           type="date"
//           id="date"
//           value={selectedDate}
//           onChange={handleDateChange}
//           required />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-2" htmlFor="Appointment">Selecct Appointment:</label>
//         <select
//           id="Appointment"
//           value={selectedAppointment}
//           onChange={handleRoomChange}
//           className="p-2 border border-gray-300 rounded"
//         >
//           <option value="">Select appointment</option>
//           <option value="Braiding">Braiding</option>
//           <option value="Hair Installation">Hair Installation</option>
//           <option value="Hair Cut">Hair Cut</option>
//           <option value="Acrylic and gel nails">Acrylic and gel nails</option>
//           <option value="Pedicure">Pedicure</option>
//           <option value="Hair Tinting">Hair Tinting</option>
//           <option value="Facial">Facials</option>
//         </select>
//       </div>

//       <button
//         onClick={handleBooking}
//         className="bg-black text-white p-2 rounded hover:bg-slate-900"
//       >
//         Book Now
//       </button>

//       </form>
//     </div>
//   );
// }

// export default Bookings;










// // import {useState} from 'react'


// // const Bookings = () => {

// //   const [name, setName] = useState('');
// //   const [date, setDate] = useState('');

// //   const handleNameChange = (event) => {
// //     setName(event.target.value);
// //   };

// //   const handleDateChange = (event) => {
// //     setDate(event.target.value);
// //   };
// //   if (setDate === '') {
// //     alert('please select a date')
// //     return;
// //   }

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
    
// //     console.log('Name:', name);
// //     console.log('Date:', date);
// //   };





// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen">
// //       <h2 className="text-2xl font-bold mb-4 uppercase">Book Your Appointment</h2>

// //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded">
// //        <label>Appointment</label>
// //        <select className='lg:w-[300px] md:w-full border-gray-300 p-2'> 
// //         <option >Braiding</option>
// //         <option >Hair Installation</option>
// //         <option >Hair Cut</option>
// //         <option >Acrylic and Gel Nails</option>
// //         <option >Pedicure</option>
// //         <option >Hair Tinting</option>
// //         <option >Facials</option>
// //        </select>
// //         <label className="mb-4 ">
// //           Name/appointment:
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={handleNameChange}
// //             className="border border-gray-300 p-8 rounded"
// //           />
// //         </label>
// //         <label className="mb-4 text-center">
// //            Date :
// //           <input
// //             type="date"
// //             value={date}
// //             onChange={handleDateChange}
// //             className="border border-gray-300 p-8 rounded "
// //           />
// //         </label>
// //       </form>

// //       <button
// //           type="submit"
// //           className="bg-blue-500 text-white py-3 px-6 rounded-lg"
// //         >
// //           Book Now
// //         </button>
// //     </div>

// //   )
// // }

// // export default Bookings



import{ useState } from 'react';
import Select from 'react-select'; // Import the Select component for time selection


 const timeOptions = [
    { value: '09:00 AM', label: '09:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '01:00 PM', label: '01:00 PM' },
    { value: '02:00 PM', label: '02:00 PM' },
    { value: '03:00 PM', label: '03:00 PM' },
    { value: '04:00 PM', label: '04:00 PM' },
    { value: '05:00 PM', label: '05:00 PM' },
    { value: '06:00 PM', label: '06:00 PM' },
    { value: '07:00 PM', label: '07:00 PM' },
  ];
  

function Bookings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    comments: '',
    time: null, // Add a 'time' field to the formData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeChange = (selectedTime) => {
    setFormData({
      ...formData,
      time: selectedTime,
    });
  };

          const handleBooking = () => {
                  // Here, you can implement the booking functionality, e.g., send a request to a server.
        alert(`Booking request has been sent.`);
     };
     

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
//     // Here, you can handle the form submission, e.g., send the data to a server.
    console.log('Form data submitted:', formData);
   };

  return (
    <div className="max-w-md mx-auto p-16 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder='your email'
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="phone">Phone:</label>
          <input
            type="phone"
            name="phone"
            placeholder='your phone'
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="date">Select Date:</label>
          <input
            type="date"
            name="date"
            placeholder='select a date'
            value={formData.date}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="time">
            Select Time:
          </label>
          <Select
            options={timeOptions}
            value={formData.time}
            onChange={handleTimeChange}
            placeholder="Select a time"
          />
        </div>


    <div className='mb-4'>
            <label htmlFor="service">Services:</label>
        
           <select className='p-2 border border-gray-300 rounded w-full'> 
            <option >Braiding</option>
            <option >Hair Installation</option>
            <option >Hair Cut</option>
            <option >Acrylic and Gel Nails</option>
           <option >Pedicure</option>
           <option >Hair Tinting</option>
          <option >Facials</option>
           <option >Dreadlock</option>
           </select>
       
          </div>

          <div className="mb-4">
          <button
            type="submit"
            onClick={handleBooking}
            className="bg-black text-white p-2 rounded hover:bg-gray-800"
          >
            Submit Booking
          </button>
        </div>

          

        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl  mb-4">Comments(optional)</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Add a comment"
          value={newComment}
          onChange={handleCommentChange}
          className="p-2 border border-gray-300 rounded w-full mb-2"
        ></textarea>
        <br />
        <button
          onClick={addComment}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-slate-900"
        >
          Add Comment
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">Recent Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">{comment}</li>
          ))}
        </ul>
      </div>
    </div>

    

      </form>

    </div>
  );
}

export default Bookings;


