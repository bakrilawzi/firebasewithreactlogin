import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeOCIDsAuDDcy1o9zaak09wO4ZWyN_vpM",
  authDomain: "laser-c7594.firebaseapp.com",
  projectId: "laser-c7594",
  storageBucket: "laser-c7594.appspot.com",
  messagingSenderId: "1098383648381",
  appId: "1:1098383648381:web:35e8ca897c0f02e4a1b314",
  measurementId: "G-3994H3J7M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import React from "react";

const Login = () => {
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      </div>
  )}
  