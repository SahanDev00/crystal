import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    salutation: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logging the form data to the console
    console.log('Form Data:', formData);

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'addressLine1', 'city', 'postalCode', 'mobile', 'email'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length) {
      console.warn('Missing required fields:', missingFields);
      toast.error('Please fill in all required fields!', {
        position: "top-right",
      });
      return;
    }

    const customerData = {
      customerID: customerId,
      facebookID: "",
      googleID: "",
      customerCategoryID: "0000",
      customerGroupID: "string",
      priceType: "string",
      loginEmail: formData.email,
      salutation: formData.salutation,
      firstName: formData.firstName,
      middleName: "",
      lastName: formData.lastName,
      companyName: "",
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
      telephoneMobile: formData.mobile,
      telephoneOther: "",
      shipAway: "",
      shipAttTo: formData.addressLine1,
      shipAddressLine1: formData.addressLine1,
      shipAddressLine2: "",
      shipCity: formData.city,
      shipState: "",
      shipPostalCode: "",
      shipCountry: formData.country,
      remarks: "",
      createdDate: new Date().toISOString(),
      activeStatus: "string",
      checkLoginData: 0,
      returnURL: "string",
      customerCategoryName: "string",
      customerGroupName: "string",
      checkTermsandCondition: true,
      useAuthentication: true,
      shipAwayBool: true,
      activeStatusBool: true,
      confirmPassword: formData.password,
      oldPassword: formData.password,
      loginPassword: formData.password,
    };

    try {
      console.log('Submitting data:', customerData);
      const response = await axios.put('https://kmatadmin.worldpos.biz/api/Customer', customerData, {
        headers: {
          'Content-Type': 'application/json',
          'APIKey': process.env.REACT_APP_API_KEY,
        },
      });
      if (response.data.success) {
        toast.success('Profile updated successfuly!', {
          position: "top-right",
          autoClose: 2000, // Automatically close after 3 seconds
        });
      } else {
        toast.error('Error updating profile!', {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile!', {
        position: "top-right",
      });
      
    }
  };

  useEffect(() => {
    // Fetch customer details if customerId is set
    if (customerId) {
      const fetchCustomerData = async () => {
        try {
          const response = await fetch(`https://kmatadmin.worldpos.biz/api/Customer/${customerId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'APIKey': process.env.REACT_APP_API_KEY, // Ensure API Key is available
            },
          });
          const responseData = await response.json();

          if (response.ok) {
            const { data } = responseData;
            setFormData({
              salutation: data.salutation || 'Mr.',
              firstName: data.firstName || '',
              lastName: data.lastName || '',
              addressLine1: data.addressLine1 || '',
              addressLine2: data.addressLine2 || '',
              city: data.city || '',
              state: data.state || '',
              postalCode: data.postalCode || '',
              country: data.country || '',
              mobile: data.telephoneMobile || '',
              email: data.loginEmail || '',
              password: data.loginPassword,
              oldPassword: data.oldPassword
            });
          } else {
            alert('Failed to fetch customer details. ' + responseData.errorMessage); // Display detailed error message
            toast.error('Fetch error!', {
              position: "top-right",
            });
          }
        } catch (error) {
          alert('An error occurred while fetching customer details.');
          toast.error('Error fetching customer details!', {
            position: "top-right",
          });
        }
      };

      fetchCustomerData();
    }
  }, [customerId]);

  return (
    <div className='mt-32 w-full md:flex justify-center items-center mb-10 font-overpass'>
      <Helmet>
        <title>K-Mats | Edit Profile</title>
      </Helmet>
      <div className='container'>
        <div>
          <h1 className='text-3xl text-black/70 mt-5 font-bold text-center'>Edit Your Details</h1>
          <form onSubmit={handleSubmit} className='mt-3'>
            <div className='flex gap-4 w-[80%] mx-auto'>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>First Name</label>
                <div className='flex items-center'>
                    <select 
                    name="salutation" 
                    value={formData.salutation}
                    onChange={handleChange}
                    className='border-cyan-400/40 border-2 py-1 mb-2 mt-1 rounded-lg'
                    >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss.">Miss.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="M/s.">M/s.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Rev.">Rev.</option>
                    </select>
                    <input name='firstName' value={formData.firstName} onChange={handleChange} className=' w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='Adam' required />
                </div>
              </div>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>Last Name</label>
                <input name='lastName' value={formData.lastName} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" placeholder='Nester' required />
              </div>
            </div>
            <div className='flex gap-4 w-[80%] mx-auto'>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>Address Line 1</label>
                <input name='addressLine1' value={formData.addressLine1} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" required />
              </div>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>Address Line 2</label>
                <input name='addressLine2' value={formData.addressLine2} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" />
              </div>
            </div>
            <div className='flex gap-4 w-[80%] mx-auto'>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>City</label>
                <input name='city' value={formData.city} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" required />
              </div>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>State</label>
                <input name='state' value={formData.state} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" />
              </div>
            </div>
            <div className='flex gap-4 w-[80%] mx-auto'>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>Postal Code</label>
                <input name='postalCode' value={formData.postalCode} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" required />
              </div>
              <div className='w-full'>
                <Countries value={formData.country} onChange={handleChange} />
              </div>
            </div>
            <div className='flex gap-4 w-[80%] mx-auto'>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>Mobile</label>
                <input name='mobile' value={formData.mobile} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="text" required />
              </div>
              <div className='w-full'>
                <label className='font-semibold text-sm text-black/80 font-overpass'>Email</label>
                <input name='email' value={formData.email} onChange={handleChange} className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-400/40 border-2 mb-2 mt-1' type="email" required />
              </div>
            </div>
            <button type='submit' className='bg-cyan-400 text-white rounded-lg py-2 px-4 mt-4 w-[80%] mx-auto block'>Save Changes</button>
          </form>
        </div>
      </div>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default EditProfile;
