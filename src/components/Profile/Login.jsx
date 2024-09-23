import React, { useEffect, useState } from 'react';
import loginPic from '../../images/login.png';
import signUpPic from '../../images/signup.png';
import Countries from './Countries';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track whether it's login or sign-up view
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    salutation: 'Mr.',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    mobile: '',
    confirmPassword: '',
    facebookID: '',
    googleID: '',
    customerCategoryID: '0000',
    customerGroupID: '',
    priceType: 'RT',
    middleName: '',
    companyName: '',
    telephoneOther: '',
    shipAway: false,
    shipAddressLine1: '',
    shipAddressLine2: '',
    shipCity: '',
    shipState: '',
    shipPostalCode: '',
    shipCountry: '',
    remarks: '',
    returnURL: '/Customer/Index',
    customerCategoryName: '',
    customerGroupName: '',
    oldPassword: '',
    checkTermsandCondition: false,
    useAuthentication: true,
    shipAwayBool: false,
    activeStatusBool: true,
  });

  const handleSwitch = () => {
    setIsLogin(!isLogin); // Toggle the state between login and sign-up
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = process.env.REACT_APP_API_URL;
    const apiURL = `${api}/api/customer`; // Adjust the URL as necessary

    if (validateForm()) {
      let dataToSubmit = {
        customerID: "", // Assuming this will be generated on the backend if left empty
        facebookID: formData.facebookID || "", // Default or from form data
        googleID: formData.googleID || "", // Default or from form data
        customerCategoryID: formData.customerCategoryID || "0000", // Default category ID
        customerGroupID: formData.customerGroupID || "", // Optional, handle accordingly
        priceType: formData.priceType || "RT", // Default or from form data
        loginEmail: formData.email,
        loginPassword: formData.password,
        salutation: formData.salutation,
        firstName: formData.firstName,
        middleName: formData.middleName || "", // Optional middle name
        lastName: formData.lastName,
        companyName: formData.companyName || "", // Optional company name
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2 || "", // Optional address line 2
        city: formData.city,
        state: formData.state || "", // Optional state
        postalCode: formData.postalCode || "", // Optional postal code
        country: formData.country || "Sri Lanka", // Default country if not provided
        telephoneMobile: formData.mobile,
        telephoneOther: formData.telephoneOther || "", // Optional telephone number
        shipAway: formData.shipAway ? "Y" : "N", // Handling shipping address, default "N"
        shipAttTo: `${formData.firstName} ${formData.lastName}`, // Default shipping attention to full name
        shipAddressLine1: formData.shipAddressLine1 || formData.addressLine1, // Default to same as billing if not provided
        shipAddressLine2: formData.shipAddressLine2 || formData.addressLine2, // Optional shipping address line 2
        shipCity: formData.shipCity || formData.city, // Default to same city as billing
        shipState: formData.shipState || formData.state, // Default to same state as billing
        shipPostalCode: formData.shipPostalCode || formData.postalCode, // Default to same postal code as billing
        shipCountry: formData.shipCountry || formData.country, // Default to same country as billing
        remarks: formData.remarks || "", // Optional remarks
        createdDate: new Date().toISOString(), // Current date
        activeStatus: "A", // Default active status
        checkLoginData: isLogin ? 1 : 0, // 1 for login, 0 for signup
        returnURL: formData.returnURL || "/Customer/Index", // Default or provided return URL
        customerCategoryName: formData.customerCategoryName || "", // Optional category name
        customerGroupName: formData.customerGroupName || "", // Optional group name
        confirmPassword: formData.confirmPassword,
        oldPassword: formData.confirmPassword || "", // Handle old password as needed
        checkTermsandCondition: formData.checkTermsandCondition || false, // Handle terms and conditions
        useAuthentication: true, // Assuming authentication is used
        shipAwayBool: formData.shipAway || false, // Boolean for shipping away
        activeStatusBool: formData.activeStatusBool || true, // Boolean for active status
      };
      
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'APIKey': apiKey,
          },
          body: JSON.stringify(dataToSubmit),
        });
      
        const result = await response.json();
      
        if (response.ok) {
          if (result.success) {
            const customerID = result.data.customerID; // Access customerID from the data object
            if (isLogin) {
              // Set cookies if Remember Me is checked
              if (rememberMe) {
                Cookies.set('customerId', customerID, { expires: 30 });
                Cookies.set('firstName', result.data.firstName, { expires: 30 });
                Cookies.set('lastName', result.data.lastName, { expires: 30 });
                Cookies.set('email', result.data.loginEmail, { expires: 30 });
              } else {
                // Store data in session
                sessionStorage.setItem('customerId', customerID);
                sessionStorage.setItem('firstName', result.data.firstName);
                sessionStorage.setItem('lastName', result.data.lastName);
                sessionStorage.setItem('email', result.data.loginEmail);
              }
            }
            // Handle successful login, like saving the customer data or redirecting the user
            sessionStorage.setItem('customerId', customerID);
            console.log(customerID); // Log customerID properly
            toast.success('Successfully logged in!', {
              position: "top-right",
              autoClose: 2000,
            });
            setTimeout(() => {
              navigate('/');
            }, 2000);
          }
          setErrorMessage(result.errorMessage);
        } else {
          setErrorMessage(result.errorMessage);
          toast.error('Validation error!', {
            position: "top-right",
          });
          console.error('Error:', result);
          console.error('Validation Errors:', result.errors); // Log validation errors
        }
        
      } catch (error) {
        console.error('Error:', error);
        toast.error('Sign in error!', {
          position: "top-right",
        });
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    const api = process.env.REACT_APP_API_URL;
    const apiURL = `${api}/api/Customer/GetByEmail?EmailAddress=${encodeURIComponent(formData.email)}`;
  
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
  
      // Step 1: Check if the email exists
      const emailCheckResponse = await fetch(apiURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey,
        },
      });
  
      const emailCheckResult = await emailCheckResponse.json();
  
      if (emailCheckResponse.ok && emailCheckResult.success) {
        const customerData = emailCheckResult.data;
  
        // Step 2: Check if the entered password matches
        const enteredPassword = formData.password;
        const storedPassword = customerData.loginPassword;
  
        // Assuming the password is hashed; you should hash the entered password and compare with stored hash.
        if (storedPassword === enteredPassword) {
          console.log('Login successful', customerData);
          if (rememberMe) {
            // Set cookies if Remember Me is checked
            Cookies.set('customerId', customerData.customerID, { expires: 30 });
            Cookies.set('firstName', customerData.firstName, { expires: 30 });
            Cookies.set('lastName', customerData.lastName, { expires: 30 });
            Cookies.set('email', customerData.email, { expires: 30 });
          } else {
            // Store data in session
            sessionStorage.setItem('customerId', customerData.customerID);
            sessionStorage.setItem('firstName', customerData.firstName);
            sessionStorage.setItem('lastName', customerData.lastName);
            sessionStorage.setItem('email', customerData.email);
          }
          // Handle successful login, like saving the customer data or redirecting the user
          toast.success('Successfully logged in!', {
            position: "top-right",
            autoClose: 2000, // Automatically close after 3 seconds
          });
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          setErrorMessage('Password does not match');
          // Show error message to the user
          toast.error('Wrong Password!', {
            position: "top-right",
          });
        }
      } else {
        setErrorMessage('Email not found');
        // Show an error message that the email doesn't exist
        toast.error('Email not found!', {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
      });
    }
  };

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    mobile: '',
    // Add other fields as necessary
  });

  useEffect(() => {
    // Retrieve customer details from cookies or session storage
    const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');

    if (customerId) {
      // Handle auto-login or redirect based on customer data
      navigate('/');
    }
  }, [navigate]); 

    // Validate fields before submitting
const validateForm = () => {
  let newErrors = {};
  
  // Email validation
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email address is invalid';
  }

  // Password validation
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  // Confirm password validation
  if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = 'Passwords do not match';
  }

  // First name validation
  if (!formData.firstName) {
    newErrors.firstName = 'First name is required';
  }

  // Last name validation
  if (!formData.lastName) {
    newErrors.lastName = 'Last name is required';
  }

  // Address Line 1 validation
  if (!formData.addressLine1) {
    newErrors.addressLine1 = 'Address Line 1 is required';
  }

  // City validation
  if (!formData.city) {
    newErrors.city = 'City is required';
  }

  // State validation
  if (!formData.state) {
    newErrors.state = 'State is required';
  }

  // Postal code validation
  if (!formData.postalCode) {
    newErrors.postalCode = 'Postal code is required';
  } else if (!/^\d+$/.test(formData.postalCode)) {
    newErrors.postalCode = 'Postal code must be a number';
  }

  // Mobile number validation
  if (!formData.mobile) {
    newErrors.mobile = 'Mobile number is required';
  } else if (!/^\+\d{10,15}$/.test(formData.mobile)) {
    newErrors.mobile = 'Mobile number must start with "+" and be between 10 to 15 digits long.';
  }

  setErrors(newErrors);

  // If no errors, return true
  return Object.keys(newErrors).length === 0;
};

  return (
    <div className={`w-full mt-24 h-full relative flex items-center py-10 ${isLogin ? 'h-[70vh] sm:h-[95vh] md:h-[85vh] lg:h-[95vh]' : ''}`}>
        <Helmet>
          <title>Crystal Mats | Login</title>
        </Helmet>
      <div className='w-[70%] h-full flex mx-auto items-center md:bg-white rounded-3xl'>
        {isLogin ? (
          // Login
          <div className='w-full h-[450px] md:h-[650px] items-center md:grid grid-cols-2'>
            <div className='md:border-r-2'>
              <h1 className='text-2xl md:text-4xl font-bold text-cyan-600 cursor-pointer text-center'>CRYSTAL</h1>
              <h1 className='text-3xl md:text-5xl font-semibold text-cyan-950 md:text-black mt-2 ml-5 text-center'>WELCOME BACK !!!</h1>
              <p className='text-gray-500 md:text-gray-800 font-semibold text-center mt-2'>Please enter your details...</p>
              <form className='mt-3 md:mt-5'>
                <label className='font-semibold md:ml-16'>Email</label>
                <input className='block w-[95%] md:w-[80%] mx-auto rounded-lg pl-4 py-2 border-cyan-500 border-2 mb-2 mt-1' name="email"
                value={formData.email}
                onChange={handleChange} 
                type="email" placeholder='example@gmail.com' required />

                <label className='font-semibold md:ml-16'>Password</label>
                <input className='block w-[95%] md:w-[80%] mx-auto rounded-lg pl-4 py-2 border-cyan-500 border-2 mb-3 mt-1'
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password" placeholder='••••••••' required />
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                        <label className='md:ml-16'>
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            />
                            Remember Me
                        </label>
                <button onClick={handleLoginSubmit} className='block mt-2 w-[95%] md:w-[80%] mx-auto rounded-lg bg-cyan-500 py-2 text-white font-semibold hover:bg-cyan-400'>Login</button>
              </form>
              <p className='text-center mt-3 font-semibold text-gray-600'>Haven't registered yet? <span className='text-cyan-500 font-bold cursor-pointer hover:text-cyan-600' onClick={handleSwitch}>Sign Up</span></p>
            </div>
            <div className='w-full h-full md:block hidden'>
              <img src={loginPic} alt="Login" className='w-[90%] mx-auto h-full rounded-r-3xl object-cover' />
            </div>
          </div>
        ) : (
          // Sign Up
          <div className='w-full h-[800px] md:h-[1000px] xl:h-[850px]  rounded-3xl md:bg-white items-center md:grid grid-cols-2'>
            <div className='w-full h-full rounded-3xl md:block hidden'>
              <img src={signUpPic} alt="Sign Up" className='w-full h-full object-cover rounded-l-3xl' />
            </div>
            <div className='w-full'>
              <h1 className='text-xl font-bold text-cyan-600 cursor-pointer text-center'>CRYSTAL</h1>
              <h1 className='text-2xl font-semibold ml-5 text-center text-black'>SIGN UP !</h1>
              <p className='text-gray-300 md:text-gray-800 font-semibold text-center'>Please enter your details...</p>
              <form className='mt-3 w-full'>
                <div className='lg:flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>First Name</label>
                    <div className='flex flex-row-reverse items-center gap-1'>
                      <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1'
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      type="text" placeholder='Adam' required />
                      <select name="salutation" value={formData.salutation} onChange={handleChange} id="" className='border-cyan-500 border-2 py-1 mb-2 mt-1 rounded-lg'>
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Miss.">Miss.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="M/s.">M/s.</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Prof.">Prof.</option>
                          <option value="Rev.">Rev.</option>
                        </select>
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>Last Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text" placeholder='Nester' required />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>
                <div className='xl:flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>Address Line 1</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                    {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>Address Line 2</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>City</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                     {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>State</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                    {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-black'>Postal Code</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    type="number" placeholder='' required />
                    {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
                  </div>
                  <div className='w-full'>
                    <Countries name="country"
                      value={formData.country}
                      onChange={handleChange} />
                  </div>
                </div>
                <label className='font-semibold text-sm md:ml-16 text-black'>Mobile Number</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    type="text" placeholder='94712345678' required />
                                    {errors.mobile && <p className="text-red-500 text-sm text-center">{errors.mobile}</p>}
                <label className='font-semibold text-sm md:ml-16 text-black'>Email</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" placeholder='example@gmail.com' required />
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {errors.email && <p className="text-red-500 text-sm text-center">{errors.email}</p>}
                <label className='font-semibold text-sm md:ml-16 text-black'>Password</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-2 mt-1' 
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password" placeholder='••••••••' required />
                {errors.password && <p className="text-red-500 text-sm text-center">{errors.password}</p>}
                <label className='font-semibold text-sm md:ml-16 text-black'>Confirm Password</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-cyan-500 border-2 mb-5 mt-1' 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password" placeholder='••••••••' required />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                <button disabled={formData.password !== formData.confirmPassword} onClick={handleSubmit} className={`block w-[98%] md:w-[80%] mx-auto rounded-lg bg-cyan-500 py-1 text-white font-semibold hover:bg-cyan-400 ${formData.password === formData.confirmPassword ? 'bg-cyan-500' : 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'}`}>Sign Up</button>
              </form>
              <p className='text-center mt-3 font-semibold text-gray-600'>Already a user? <span className='text-cyan-500 font-bold cursor-pointer hover:text-cyan-600' onClick={handleSwitch}>Login</span></p>
            </div>
          </div>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
