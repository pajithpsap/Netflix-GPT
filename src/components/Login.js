import React, { useRef, useState } from "react";
import Header from "./Header";
import { Netflix_BG, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  // to check whether it's sign in or sign up
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // Validating form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;

    // sign in/up logic

    if (!isSignInForm) {
      //sign up logic
      // once the user created it will return user object as response
      createUserWithEmailAndPassword(
        // api for reg a user
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user; // user object
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
            // photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Netflix_BG} alt="logo" />
      </div>
      <form
        // onSubmit={(e) => e.preventDefault()} --> to prevent the form to submit
        onSubmit={(e) => e.preventDefault()}
        className="relative top-48 p-5 w-1/3 bg-black bg-opacity-80 flex flex-col m-auto text-white rounded-md"
      >
        <h1 className="font-bold text-3xl text-center pb-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 m-2 rounded-lg bg-gray-900 bg-opacity-40 "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-900 bg-opacity-40 rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-2 rounded-lg bg-gray-900 bg-opacity-40 "
        />
        <p className="text-red-500 py-2 font-bold m-2">{errMsg}</p>
        <button
          className="p-1 w-32 mx-auto mt-2 bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-xl pt-5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
