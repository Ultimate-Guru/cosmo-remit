/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bgImage from "../assets/img/money.jpg";

const SignUp = () => {
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
    // Add your form submission logic here (e.g., API call)
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
  })
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
    <div className="flex h-screen">
      <div className="w-4/12 bg-gray-800 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-xl font-bold">The fastest way to</h1>
        <h2 className="text-2xl font-bold mb-52 text-red-600">send money abroad</h2>
        <img
          src="https://cosmoremit.com.au/assets/images/logo/logo.png"
          alt="CosmoLogo"
          className="w-48 mb-44"
        />
      </div>

      <div className="ml-16 w-1/2 bg-white p-10">
        {/* Signup steps */}
        <div className="flex justify-between flex-row mb-7">
          <div className="flex cursor-pointer gap-3">
            <h1 className="bg-red-500 text-white font-bold text-xl px-3 rounded">1</h1>
            <span className="font-bold">Sign Up</span>
          </div>
          <div className="flex cursor-pointer gap-3">
            <h1 className="bg-gray-400 text-white font-bold text-xl px-3 rounded">2</h1>
            <span className="font-bold text-gray-400">Verify Email</span>
          </div>
          <div className="flex cursor-pointer gap-3">
            <h1 className="bg-gray-400 text-white font-bold text-xl px-3 rounded">3</h1>
            <span className="font-bold text-gray-400">Upload Credentials</span>
          </div>
        </div>
        <hr className="h-7 text-gray-500 font-medium" />

        {/* Sign up form */}
        <div className="text-center">
          <h3 className="font-bold mb-4 text-2xl">Sign up</h3>
          <p className="text-gray-400 mb-6 font-medium text-xs">
            Please fill in your name as it appears on your official documents
            and government IDs.
            <p>Already have an account?{" "}
              <span>
                <a href="#" className="text-red-600 font-medium">Log in here</a>
              </span>
            </p>
          </p>
        </div>

        <form className="flex justify-between m-1" onSubmit={handleSubmit}>
          {/* Left column inputs */}
          <div>
            <label className="text-sm text-gray-500 font-medium">First name</label>
            <div className="mb-4">
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="bg-gray-100 rounded h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.FirstName}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Country of residence</label>
            <div className="mb-4">
              <input
                type="text"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.Country}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Phone number</label>
            <div className="mb-4">
              <input
                type="tel"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.PhoneNumber}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Confirm Password</label>
            <div className="mb-4">
              <input
                type="password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.ConfirmPassword}</p>
            </div>
          </div>

          {/* Right column inputs */}
          <div className="ml-20">
            <label className="text-gray-500 font-medium text-sm">Last name</label>
            <div className="mb-4">
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.LastName}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Email</label>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.Email}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Password</label>
            <div className="mb-4">
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="rounded bg-gray-100 h-8 p-2 w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs">{errors.Password}</p>
            </div>
          </div>
        </form>

        {/* <div className="flex items-center justify-between mb-4">
          <input type="checkbox" className="" required />
          <label className="text-gray-600 mr-8 text-xs font-medium">I agree to the{" "}
            <a href="#" className="text-red-600">terms & conditions</a>{" "}and{" "}
            <a href="#" className="text-red-600">privacy policy</a>
          </label>
        </div> */}

        {/* Submit button */}
        <div className="flex justify-end mt-3 mr-2">
          <button
            className="bg-red-600 text-white w-28 py-2 rounded-md"
            type="submit"
            onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;