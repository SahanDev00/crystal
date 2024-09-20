import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPassword = () => {
  const [currentPassword, setCurrentPassword] = useState(''); // Input for current password
  const [newPassword, setNewPassword] = useState(''); // Input for new password
  const [confirmNewPassword, setConfirmNewPassword] = useState(''); // Input for confirming new password
  const [loginPassword, setLoginPassword] = useState(''); // Fetched password from API
  const [customerId, setCustomerId] = useState(null);
  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    // Retrieve customer ID from cookies or session storage
    const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');
    if (customerId) {
      setCustomerId(customerId); // Assuming customerId is a string
    }
  }, []);

  console.log(customerId)

  // Fetch loginPassword when component mounts
  useEffect(() => {
    if (customerId) {
      const apiKey = process.env.REACT_APP_API_KEY;
      fetch(`https://extremeadmin.worldpos.biz/api/Customer/${customerId}`, {
        headers: {
          'APIKey': apiKey,
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.success && data.data) {
          setLoginPassword(data.data.loginPassword);
        }
      })
      .catch(error => {
        alert('Failed to fetch current password.');
      });
    }
  }, [customerId]);

  // Handle password change form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });

    const apiKey = process.env.REACT_APP_API_KEY;

    let hasError = false;

    // Validate current password
    if (currentPassword !== loginPassword) {
      setErrors(prevErrors => ({ ...prevErrors, currentPassword: 'Current password is incorrect.' }));
      hasError = true;
    }

    // Validate new password
    if (newPassword.length < 6) {
      setErrors(prevErrors => ({ ...prevErrors, newPassword: 'New password must be at least 6 characters long.' }));
      hasError = true;
    }

    // Validate confirm new password
    if (newPassword !== confirmNewPassword) {
      setErrors(prevErrors => ({ ...prevErrors, confirmNewPassword: 'New password and confirm password do not match.' }));
      hasError = true;
    }

    if (hasError) return; // Stop form submission if there are validation errors

    // Call API to change the password with PUT method and query parameters
    fetch(`https://extremeadmin.worldpos.biz/api/Customer/EditPassword?CustomerID=${customerId}&LoginPassword=${encodeURIComponent(newPassword)}`, {
      method: 'PUT',
      headers: {
        'APIKey': apiKey,
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        //alert('Password changed successfully!');
        toast.success('Password changed successfully!', {
          position: "top-right",
          autoClose: 2000, // Automatically close after 3 seconds
        });
        setTimeout(() => {
          window.location.reload(); // Refresh the page
        }, 2000);
      } else {
        //alert('Failed to change password.');
        toast.error('Validation error!', {
          position: "top-right",
        });
      }
    })
    .catch(error => {
      //alert('Failed to change password.');
      toast.error('Failed to change the password!', {
        position: "top-right",
      });
    });
  };

  return (
    <div className='container h-[450px] xl:h-[600px] relative mx-auto mt-24'>
      <Helmet><title>SENEX | Edit Password</title></Helmet>
      <h1 className='text-3xl font-semibold text-center mt-16 mb-4 uppercase font-poppins text-black/80'>Change Your Password</h1>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full text-center mt-5'>
          <form onSubmit={handleSubmit}>
            <label className='block font-semibold mt-3 text-sm font-poppins'>Current Password</label>
            <input
              className={`w-[50%] rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.currentPassword ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              placeholder='••••••••'
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            {errors.currentPassword && <p className='text-red-500 text-sm'>{errors.currentPassword}</p>}

            <label className='block font-semibold mt-3 text-sm font-poppins'>New Password</label>
            <input
              className={`w-[50%] rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.newPassword ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              placeholder='••••••••'
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {errors.newPassword && <p className='text-red-500 text-sm'>{errors.newPassword}</p>}

            <label className='font-semibold text-sm mt-3 block font-poppins'>Confirm New Password</label>
            <input
              className={`w-[50%] rounded-lg pl-4 py-1 border-2 mb-5 mt-1 ${errors.confirmNewPassword ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              placeholder='••••••••'
              required
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            {errors.confirmNewPassword && <p className='text-red-500 text-sm'>{errors.confirmNewPassword}</p>}

            <button type='submit' className='block w-[50%] mx-auto mt-2 rounded-lg bg-cyan-500 py-2 text-white font-semibold hover:bg-cyan-600/90'>Change Password</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default EditPassword;
