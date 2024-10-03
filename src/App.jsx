/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Choose from "./components/WhyChooseUs/Choose";
import Closer from "./components/CloserThanYouThink/Closer";
import Works from "./components/HowItWorks/Works";
import Countries from "./components/CountriesSection/Countries";
import Distance from "./components/DistanceSection/Distance";
import Fastest from "./components/FastestWaySection/Fastest";
import Faq from "./components/NewsFAQ/Faq";
import Apps from "./components/AppDownloadSection/Apps";
import Footer from "./components/Subscribe/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";
import Upload from "./pages/Upload";
import Passport from "./pages/Passport";
import Resident from "./pages/Resident";
import Transact from "./pages/Transact";
import Confirm from "./pages/Confirm";
import Success from "./dashboard/accountlimits/Success";
import Review from "./dashboard/accountlimits/Review";
import Funds from "./dashboard/accountlimits/Funds";
import Residence from "./dashboard/accountlimits/Residence";
import Limits from "./dashboard/accountlimits/Limits";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <Closer />
      <Works/>
      <Countries />
      <Distance />
      <Fastest />
      <Faq />
      <Apps />
      <Footer />

      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      <VerifyEmail />
      <Upload />
      <Passport />
      <Resident />
      <Transact />
      <Confirm />

      <Limits />
      <Residence />
      <Funds />
      <Review />
      <Success />
    </div>
  );
};

export default App;