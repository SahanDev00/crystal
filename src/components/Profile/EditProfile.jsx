import React from 'react'
import Countries from './Countries'

const EditProfile = () => {
  return (
    <div className='mt-32 w-full'>
        <div className=' xl:h-[600px] container xl:mt-20 mx-auto'>
            <div>
                <h1 className='text-3xl text-black/70 mt-5 font-bold text-center font-poppins'>Edit Your Details</h1>
                    <form className='mt-3'>
                        <div className='flex gap-4 w-[80%] mx-auto'>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>First Name</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='Adam' required />
                            </div>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>Last Name</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='Nester' required />
                            </div>
                            </div>
                            <div className='flex gap-4 w-[80%] mx-auto'>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>Address Line 1</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='' required />
                            </div>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>Address Line 2</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='' required />
                            </div>
                            </div>
                            <div className='flex gap-4 w-[80%] mx-auto'>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>City</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='' required />
                            </div>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>State</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='' required />
                            </div>
                            </div>
                            <div className='flex gap-4 w-[80%] mx-auto'>
                            <div className='w-full'>
                                <label className='font-semibold text-sm text-black/80 font-poppins'>Postal Code</label>
                                <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="number" placeholder='' required />
                            </div>
                            <div className='w-full text-gray-400'>
                                <Countries />
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto'>
                            <label className='font-semibold text-sm text-black/80 font-poppins'>Mobile Number</label>
                            <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='94712345678' required />
                        </div>
                        <div className='w-[80%] mx-auto'>
                            <label className='font-semibold text-sm text-black/80 font-poppins'>Email</label>
                            <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-5 mt-1' type="email" placeholder='example@gmail.com' required />
                        </div>
                        <button className='block w-[80%] mx-auto rounded-lg bg-cyan-500 py-2 text-white font-semibold hover:bg-cyan-400'>Edit Profile</button>
                    </form>
                </div>
        </div>
        <div className='container h-[450px] xl:h-[500px] mx-auto '>
            <h1 className='text-3xl text-black/80 font-bold text-center mb-4 font-poppins'>Change Your Password</h1>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full text-center mt-5'>
                    <form>
                        <label className='block font-semibold mt-3 text-sm text-white font-poppins'>Current Password</label>
                        <input className='w-[50%] rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' type="password" placeholder='••••••••' required />
                        <label className='block font-semibold mt-3 text-sm text-white font-poppins'>New Password</label>
                        <input className='w-[50%] rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' type="password" placeholder='••••••••' required />
                        <label className='font-semibold text-sm mt-3 text-white block font-poppins'>Confirm New Password</label>
                        <input className='w-[50%] rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-5 mt-1' type="password" placeholder='••••••••' required />
                        <button type='submit' className='block w-[50%] mx-auto mt-2 rounded-lg bg-cyan-500 py-2 text-white font-semibold hover:bg-cyan-600'>Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile