/* eslint-disable no-unused-vars */
import React, { useState } from 'react';  
import Input from '../components/Input';  
import { NavLink } from 'react-router-dom';  

const SignIn = () => {  
  const [formData, setFormData] = useState({  
    email: "",  
    password: "",  
  });  

  const [errors, setErrors] = useState({});  

  // Validation Logic  
  const validate = () => {  
    const newErrors = {};  
    
    if (!formData.email) {  
      newErrors.email = "Email is required";  
    }  
    if (!formData.password) {  
      newErrors.password = 'Password is required';  
    }  
    
    return newErrors;  
  };  

  // Handle Submit  
  const handleSubmit = (e) => {  
    e.preventDefault();  

    const validationErrors = validate();  
    setErrors(validationErrors);  

    if (Object.keys(validationErrors).length === 0) {  
      alert(`Login Successfully!`);  
      // You can also redirect the user or handle authentication here  
    } else {  
      alert('Login Failed! Please check your credentials');  
    }  

    // Reset data after submission  
    setFormData({  
      email: '',  
      password: ''  
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
    <div>  
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">  
        <h1 className="text-2xl font-bold text-foreground">Welcome back!</h1>  
        <p className="text-gray-500 font-medium text-sm">  
          New to CosmoRemit?   
          <NavLink to={'/SignUp'} className="text-red-600"> Sign up</NavLink>  
        </p>  
        <form className="w-full max-w-sm mt-4" onSubmit={handleSubmit}>  
          <label className="block text-left text-muted-foreground" htmlFor="email">Email</label>  
          <div className="mb-4">  
            <Input  
              type="email"  
              name="email"  
              value={formData.email} // Add value to keep input controlled  
              className="rounded border bg-gray-100 h-8 p-2 w-64 outline-none"  
              onChange={handleChange} // Add onChange handler  
              required  
            />  
            {errors.email && (<p className="text-red-600 text-xs">{errors.email}</p>)}  
          </div>  
          <label className="block text-left text-muted-foreground mt-4" htmlFor="password">Password</label>  
          <div className="mb-4">  
            <Input  
              type="password"  
              name="password" // Changed from "firstName" to "password"  
              value={formData.password} // Add value to keep input controlled  
              className="rounded bg-gray-100 h-8 p-2 w-64 outline-none"  
              onChange={handleChange} // Add onChange handler  
              required  
            />  
            {errors.password && (  
              <p className="text-red-600 text-xs">{errors.password}</p>  
            )}  
          </div>  
          <button type="submit" className="mt-6 bg-red-600 text-white p-2 rounded w-full hover:bg-red-700">Sign in</button>  
          <p className='text-center m-5'>  
            <NavLink to={'/ForgotPassword'} className="mt-4 text-muted-foreground">Forgot password?</NavLink>  
          </p>  
        </form>  
      </div>  
    </div>  
  );  
}  

export default SignIn;