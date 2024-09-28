/* eslint-disable no-unused-vars */
import React from 'react';  
import { NavLink } from 'react-router-dom';  

const SignIn = () => {  
  return (  
    <div>  
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">  
        <h1 className="text-2xl font-bold text-foreground">Welcome back!</h1>  
        <p className="text-gray-500 font-medium text-sm">  
          New to CosmoRemit?   
          <NavLink to={'/SignUp'} className="text-red-600"> Sign up</NavLink>  
        </p>  
        <form className="w-full max-w-sm mt-4">  
          <label className="block text-left text-muted-foreground" htmlFor="email">Email</label>  
          <div className="mb-4">  
            <input  
              type="email"  
              name="email"   
              className="rounded border bg-gray-100 h-8 p-2 w-64 outline-none"  
              required  
            />  
          </div>  
          <label className="block text-left text-muted-foreground mt-4" htmlFor="password">Password</label>  
          <div className="mb-4">  
            <input  
              type="password"  
              name="password"   
              className="rounded bg-gray-100 h-8 p-2 w-64 outline-none"  
              required  
            />  
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