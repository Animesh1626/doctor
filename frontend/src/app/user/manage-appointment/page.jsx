'use client';
import { IconTrash } from '@tabler/icons-react';
import axios from 'axios';
import { Snippet } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageAppointment = () => {
    
    const [appointmentList, setAppointmentList] = useState([]);

   const fetchUserData = async ()=>{
        const res= await axios.get('http://localhost:5000/slot/getall');
        console.table(res.data);
        setAppointmentList(res.data);
   }

   useEffect(() => {
    fetchUserData();
   },[]);

   const deleteappointment =(id)=>{
      axios.delete(`http://localhost:5000/slot/delete/${id}`)
      .then((result) => {
        toast.success('Appointment Deleted Successfully');
        fetchUserData();
      }).catch((err) => {
        console.log(err);
        toast.error('Failed To Delete Appointment')
        
      });
   }

    return (
    <div>
        <div className='max-w-[80%] mx-auto'>
        <h1 className='text-center font-bold text-4xl'>Manage-Appointment</h1>

        <table className='w-full mt-10 border-2 border-blue-200'>
          <thead className='bg-blue-400 text-white'>
            <tr>
              <th>S.NO.</th>
              <th>Id</th>
              <th>Title</th>
              <th>Doctor</th>
              <th>Description</th>  
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='border-2'>
            {
              appointmentList.map((slot,index)=>{
                return<tr key={slot._id}  className={`text-center border-2 border-blue-200 ${index %2===0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                  <td className='p-3'>{index+1}</td>
                  <td className='p-3'>{slot._id}</td>
                  <td className='p-3'>{slot.title}</td>
                  <td className='p-3'>{slot.price}</td>
                  <td className='p-3'>{slot.description}</td>
                  <td className='p-3'>{slot.category}</td>
                  <td className='p-3'>{slot.Image}</td>
                  <td>
                    <button onClick={()=>{deleteappointment (slot._id)}}  className='rounded bg-red-500 text-white px-3 py-1'>
                      <IconTrash/>
                    </button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageAppointment;