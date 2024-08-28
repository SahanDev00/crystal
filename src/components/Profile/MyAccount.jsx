import React from 'react'
import { FaParachuteBox, FaRegEdit } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'

const MyAccount = () => {
  return (
    <div className='w-full mt-32'>
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-4xl text-black/70 font-bold text-center my-10 uppercase'>Personal Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Personal Profile</h1>
                    <p className='text-gray-600 text-lg'><span className='font-semibold'>Name:</span> Example Name</p>
                    <p className='text-gray-600 text-lg'><span className='font-semibold'>Email:</span> example@gmail.com</p>
                    <p className='text-gray-600 text-lg'><span className='font-semibold'>Telephone:</span> 0712345678</p>
                </div>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Default Billing Address</h1>
                    <p className='font-semibold text-gray-600 text-lg'>Example Name</p>
                    <p className='text-gray-600 text-wrap '>No.01, Example Location, Example street, Example, Example adshgbjb hasidjijd adiwabdi gaiuda idi.</p>
                </div>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Shipping Address</h1>
                    <p className='font-semibold text-gray-600 text-lg'>Example Name</p>
                    <p className='text-gray-600 text-wrap '>No.01, Example Location, Example street, Example, Example adshgbjb hasidjijd adiwabdi gaiuda idi.</p>
                </div>
            </div>
        </div>
        <div className='grid space-y-5 sm:space-y-0 grid-cols-1 md:grid-cols-3 py-6 justify-evenly rounded-lg border border-cyan-400/40 w-[90%] md:w-[70%] mx-auto my-14 '>
            <Link to='/my-orders' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <FaParachuteBox size={25}/>
                <h1>Orders</h1>
            </Link>
            <Link to='/edit-profile' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <FaRegEdit size={25}/>
                <h1>Edit Profile</h1>
            </Link>
            <div className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <IoIosLogOut size={25}/>
                <h1>Log Out</h1>
            </div>
        </div>
    </div>
  )
}

export default MyAccount