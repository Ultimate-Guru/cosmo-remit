/* eslint-disable no-unused-vars */
import React from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";
import Upload from "./pages/Upload";
import Passport from "./pages/Passport";
import Resident from "./pages/Resident";
import Transact from "./pages/Transact";
import Confirm from "./pages/Confirm";

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <VerifyEmail />
      <Upload /> */}
      <Passport />
      <Resident />
      <Transact />
      <Confirm />
    </div>
  );
};

export default App;