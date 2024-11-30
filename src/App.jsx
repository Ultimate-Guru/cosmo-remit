/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
import Layout from "./dashboard/shared/Layout";
import Home from '../src/dashboard/home/Home'
import Transactions from '../src/dashboard/transactionHistory/Transactions';
import Beneficiary from "./dashboard/beneficiaryList/Beneficiary";
import AddBeneficiary from "./dashboard/beneficiaryList/AddBeneficiary";
import Profile from "./dashboard/profile/Profile";
import Notice from "./dashboard/home/Notice";
import Successful from "./dashboard/home/Successful";
import Receiver from './dashboard/home/Receiver'
import ReviewPage from "./dashboard/home/ReviewPage";
import Dashboard from "./dashcomp/layout/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Landing Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
              <Choose />
              <Closer />
              <Works />
              <Countries />
              <Distance />
              <Fastest />
              <Faq />
              <Apps />
              <Footer />
            </>
          } 
        />

        {/* Authentication and other routes */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Passport" element={<Passport />} />
        <Route path="/Resident" element={<Resident />} />
        <Route path="/Transact" element={<Transact />} />
        <Route path="/Confirm" element={<Confirm />} />

        {/* Dashboard-related Routes */}
        <Route path="/Dashboard" element={<Dashboard /> }/>

        <Route path="/Layout" element={<Layout />}/>

        <Route path="/Home" element={<Home />}/>
        <Route path="/Receiver" element={<Receiver />}/>
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Successful" element={<Successful />} />
        <Route path="ReviewPage" element={<ReviewPage />} />

        <Route path="/Transactions" element={<Transactions/>}/>   

        <Route path="/Beneficiary" element={<Beneficiary />}/>
        <Route path="/AddBeneficiary" element={<AddBeneficiary />}/>

        <Route path="/Profile" element={<Profile />}/>

        
        <Route path="/Limits" element={<Limits />} />
        <Route path="/Residence" element={<Residence />} />
        <Route path="/Funds" element={<Funds />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Success" element={<Success />} />

      </Routes>
    </div>
  );
};

export default App;