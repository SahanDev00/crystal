import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { FaParachuteBox, FaRegEdit } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import loader from '../../images/loader.gif'
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidEdit } from "react-icons/bi";

const MyAccount = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [customerId, setCustomerId] = useState(null);
    const customerId2 = Cookies.get('customerId') || sessionStorage.getItem('customerId');
    const Navigate = useNavigate()
  
    const handleEditClick = () => setIsModalOpen(true);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
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
      return <div className='h-[70vh] w-screen flex items-center justify-center'><img src={loader} className='w-[100px]' alt="" /></div>; // or a spinner/loading component
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


      const handleSaveChanges = async () => {
        const url = "https://kmatadmin.worldpos.biz/api/Customer/CustomerShipping";
      
        const payload = {
          customerID: customerId2,
          shipAttTo: profileData.customerDisplay,
          shipAddressLine1: profileData.shipAddressLine1,
          shipAddressLine2: profileData.shipAddressLine2,
          shipCity: profileData.shipCity,
          shipState: profileData.shipState,
          shipPostalCode: profileData.shipPostalCode,
          shipCountry: profileData.shipCountry,
        };
      
        try {
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              'APIKey': process.env.REACT_APP_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
      
          if (response.ok) {
            console.log("Shipping address updated successfully!");
            setIsModalOpen(false); // Close the modal on success
          } else {
            console.error("Failed to update shipping address", response.status);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
      
      
  return (
    <div className='w-full mt-32 font-overpass'>
        <Helmet>
          <title>K-Mats | My Account</title>
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
                <div className='w-full p-5 relative space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Shipping Address</h1>
                    <p className='font-semibold text-gray-600 text-lg'>{profileData.customerDisplay}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Address Line 1: </span>{profileData.shipAddressLine1}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Address Line 2: </span>{profileData.shipAddressLine2}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>City: </span>{profileData.shipCity}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>State: </span>{profileData.shipState}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Postal Code: </span>{profileData.shipPostalCode}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Country: </span>{profileData.shipCountry}</p>
                    <BiSolidEdit className='absolute top-2 right-4 size-5 cursor-pointer hover:text-cyan-600' onClick={handleEditClick}/>
                </div>
                <div className='w-full p-5 space-y-2 border rounded-xl border-gray-400 bg-cyan-400/20 shadow-lg'>
                    <h1 className='text-center text-black/60 text-2xl font-bold mt-2 mb-6'>Default Billing Address</h1>
                    <p className='font-semibold text-gray-600 text-lg'>{profileData.customerDisplay}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Address:</span> {profileData.addressDisplay}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>City/State/Postal: </span> {profileData.city}, {profileData.state}, {profileData.postalCode}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Phone:</span> {profileData.telephoneMobile}</p>
                    <p className='text-gray-600 text-wrap '><span className='font-semibold'>Country:</span> {profileData.country}</p>
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
              {/* Modal */}
              {
          isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Edit Shipping Address</h2>
                <form>
              
                  <div className="mb-4">
                    <label className="block text-gray-700">Address Line 1</label>
                    <input
                      type="text"
                      name="addressDisplay"
                      value={profileData.shipAddressLine1}
                      onChange={(e) =>
                        setProfileData({ ...profileData, shipAddressLine1: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Address Line 2</label>
                    <input
                      type="text"
                      name="addressDisplay"
                      value={profileData.shipAddressLine2}
                      onChange={(e) =>
                        setProfileData({ ...profileData, shipAddressLine2: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={profileData.shipCity}
                      onChange={(e) =>
                        setProfileData({ ...profileData, shipCity: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">State</label>
                    <input
                      type="text"
                      name="state"
                      value={profileData.shipState}
                      onChange={(e) =>
                        setProfileData({ ...profileData, shipState: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={profileData.shipPostalCode}
                      onChange={(e) =>
                        setProfileData({ ...profileData, shipPostalCode: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={profileData.shipCountry}
                      onChange={(e) =>
                        setProfileData({ ...profileData, shipCountry: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                </form>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )
        }

    </div>
  )
}

export default MyAccount