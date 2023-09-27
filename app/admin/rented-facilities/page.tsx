import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full p-5'>
      <h1 className='text-2xl font-bold'>Rented Facilites</h1>
      <div className="w-full mt-6 ">
        <table className='w-full '>
            <thead className='md:text-2xl'>
                <tr>
                    <th>Facility Name</th>
                    <th>Booked By</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center text-xs md:text-base font-semibold text-gray-700 py-2'>
                    <td>SSU Gymnasium</td>
                    <td>Jireh Lapura</td>
                    <td>09/22/2021</td>
                    <td>2:00 PM</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
