import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { FaParachuteBox, FaRegEdit } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {

    const [profileData, setProfileData] = useState(null);
    const [customerId, setCustomerId] = useState(null);
    const Navigate = useNavigate()
  
    useEffect(() => {
        // Retrieve customer ID from cookies or session storage
        const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');
        if (customerId) {
          setCustomerId(customerId); // Assuming customerId is a string
        }
      }, []);
  
    useEffect(() => {
      if (customerId) {
        // Fetch profile data from API
        const fetchProfileData = async () => {
          const api = process.env.REACT_APP_API_URL;
          const apiURL = `${api}/api/Customer`; // Adjust with dynamic ID as necessary
  
          try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const response = await fetch(`${apiURL}/${customerId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'APIKey': apiKey,
              },
            });
            const result = await response.json();
  
            if (response.ok) {
              setProfileData(result.data);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
  
        fetchProfileData();
      }
    }, [customerId]);
  
    if (!profileData) {
      return <div>Loading...</div>; // or a spinner/loading component
    }


    const handleLogout = () => {
        // Clear session data
        sessionStorage.removeItem('customerId');
        sessionStorage.removeItem('firstName');
        sessionStorage.removeItem('lastName');
        sessionStorage.removeItem('email');
      
        // Clear cookies
        Cookies.remove('customerId');
        Cookies.remove('firstName');
        Cookies.remove('lastName');
        Cookies.remove('email');
        
        toast.success('Successfully logged out!', {
          position: "top-right",
          autoClose: 2000, // Automatically close after 3 seconds
        });
        setTimeout(() => {
          Navigate('/');
        }, 2000);
        // Redirect to login or home
      };

  return (
    <div className='w-full mt-32 font-overpass'>
        <Helmet>
          <title>Crystal Mats | My Account</title>
        </Helmet>
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-4xl text-black/70 font-bold text-center my-10 uppercase'>Personal Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Personal Profile</h1>
                    <p className='text-gray-600 text-lg'><span className='font-semibold'>Name:</span> {profileData.customerDisplay}</p>
                    <p className='text-gray-600 text-lg'><span className='font-semibold'>Email:</span> {profileData.loginEmail}</p>
                    <p className='text-gray-600 text-lg'><span className='font-semibold'>Telephone:</span> {profileData.telephoneMobile}</p>
                </div>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Default Billing Address</h1>
                    <p className='font-semibold text-gray-600 text-lg'>{profileData.customerDisplay}</p>
                    <p className='text-gray-600 text-wrap '>{profileData.addressDisplay}</p>
                </div>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Shipping Address</h1>
                    <p className='font-semibold text-gray-600 text-lg'>{profileData.customerDisplay}</p>
                    <p className='text-gray-600 text-wrap '>{profileData.addressDisplay}</p>
                    <p className='text-gray-600 text-wrap '>{profileData.city}, {profileData.shipState}, {profileData.postalCode}</p>
                    <p className='text-gray-600 text-wrap '>Phone: {profileData.telephoneMobile}</p>
                    <p className='text-gray-600 text-wrap '>Country: {profileData.shipCountry}</p>
                </div>
            </div>
        </div>
        <div className='grid space-y-5 sm:space-y-0 grid-cols-1 md:grid-cols-4 py-6 justify-evenly rounded-lg border border-cyan-400/40 w-[90%] md:w-[70%] mx-auto my-14 '>
            <Link to='/my-orders' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <FaParachuteBox size={25}/>
                <h1>Orders</h1>
            </Link>
            <Link to='/edit-profile' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <FaRegEdit size={25}/>
                <h1>Edit Profile</h1>
            </Link>
            <Link to='/edit-password' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <FaRegEdit size={25}/>
                <h1>Edit Password</h1>
            </Link>
            <div onClick={handleLogout} className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-cyan-500 text-black/70'>
                <IoIosLogOut size={25}/>
                <h1>Log Out</h1>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default MyAccount