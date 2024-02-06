import React, { useState } from "react";
import Header from "./Header";
import { Netflix_BG } from "../utils/constants";
const Login = () => {
  // to check whether it's sign in or sign up
  const[isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={Netflix_BG}
          alt="logo" 
        />
      </div>
      <form className="relative top-48 p-5 w-1/3 bg-black bg-opacity-80 flex flex-col m-auto text-white rounded-md">
        <h1 className="font-bold text-3xl text-center pb-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 m-2 rounded-lg bg-gray-900 bg-opacity-40 "/>
        )}
        <input type="text" placeholder="Email Address" className="p-2 m-2 bg-gray-900 bg-opacity-40 rounded-lg"/>
        <input type="text" placeholder="Password" className="p-2 m-2 rounded-lg bg-gray-900 bg-opacity-40 "/>
        <button className="p-1 w-32 mx-auto mt-2 bg-red-700 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-xl pt-5 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign in Now"}</p>
      </form>
    </div>
  );
};

export default Login;
