/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import bgImage from '../assets/img/Vector.png';
import Logo from "../assets/img/Favicon.png";
import Nav1 from '../assets/img/nav1.png'

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ConfirmPassword: '',
    Country: ''
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.FirstName) {
      newErrors.FirstName = 'First Name is required';
    }
    if (!formData.LastName) {
      newErrors.LastName = 'Last Name is required';
    }
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
    }
    if (!formData.PhoneNumber) {
      newErrors.PhoneNumber = 'Phone Number is required';
    }
    if (!formData.Password) {
      newErrors.Password = 'Password is required';
    }
    if (formData.Password !== formData.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match';
    }
    if (!formData.Country) {
      newErrors.Country = 'Country is required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // If no validation errors, form is ready to be submitted
    if (Object.keys(validationErrors).length === 0) {
      window.alert(
        `Form Submitted Successfully!\n\nData:\nFirst Name: ${formData.FirstName}\nLast Name: ${formData.LastName}\nEmail: ${formData.Email}\nPhone Number: ${formData.PhoneNumber}\nCountry: ${formData.Country}`
      );

      // Navigate to the verification page after successful validation
      navigate('/VerifyEmail');
    } else {
      window.alert("Validation Failed! Please correct the errors and try again.");
    }

    // Reset form data after submission  
    setFormData({
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      Password: '',
      ConfirmPassword: '',
      Country: ''
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image container with text and logo */}
      <div className="relative w-full md:w-4/12 h-2/5 md:h-full">
        <img src={bgImage} alt="BgImage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.54)]"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-lg font-bold text-white">The fastest way to</h1>
          <h2 className="text-xl font-extrabold text-red-600">send money abroad</h2>
          <img src={Logo} alt="CosmoLogo" className="w-24 md:w-50 ml-10 md:mt-32" />
        </div>
      </div>

      {/* Form beside the image */}
      <div className="w-full md:w-1/2 bg-white p-4 md:p-10 ml-14">
        {/* Signup steps */}
        <div className="flex justify-between flex-row mb-7">
        <img src={Nav1} />
        </div>

        {/* Sign up form */}
        <div className="text-center ml-10">
          <h3 className="font-bold mb-2 md:mb-4 text-lg md:text-2xl">Sign up</h3>
          <p className="text-gray-400 mb-4 md:mb-6 font-medium text-xs">
            Please fill in your name as it appears on your official documents
            and government IDs.
            <p>Already have an account?{" "}
              <span>
                <NavLink to={'/SignIn'} className="text-red-600 font-medium">Log in here</NavLink>
              </span>
            </p>
          </p>
        </div>

        <form className="flex flex-col md:flex-row justify-between ml-1" onSubmit={handleSubmit}>
          {/* Left column inputs */}
          <div className="mb-4 md:mb-0">
            <label className="text-sm text-gray-500 font-medium">First name</label>
            <div className="mb-4">
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="bg-gray-100 rounded h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.FirstName}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Country of residence</label>
            <div className="mb-4">
              <input
                type="text"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.Country}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Phone number</label>
            <div className="mb-4">
              <input
                type="tel"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.PhoneNumber}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Confirm Password</label>
            <div className="mb-4">
              <input
                type="password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.ConfirmPassword}</p>
            </div>
          </div>

          {/* Right column inputs */}
          <div className="mb-4 md:ml-20">
            <label className="text-gray-500 font-medium text-sm">Last name</label>
            <div className="mb-4">
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.LastName}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Email</label>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.Email}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Password</label>
            <div className="mb-4">
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.Password}</p>
            </div>

          </div>
        </form>

        <div className="flex items-center ml-2">
          <input type="checkbox" className="mr-1" required />
          <p className="font-medium text-sm">
            I agree to the {""}
            <a href="#" className="text-red-600 font-medium">terms</a> {""}
            & {""}
            <a href="#" className="text-red-600 font-medium">conditions</a>
          </p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-600 text-white font-semibold rounded py-2 md:w-48 ml-40">
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;