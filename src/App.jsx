/* eslint-disable no-unused-vars */
import React from "react";
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
import LimitForm from "./dashboard/accountlimits/LimitForm";
// Emma's User Links
import UserHome from "./pages/UserHome";
import UserTransactionHistory from "./pages/UserTransactionHistory";
import UserBeneficiary from './pages/UserBeneficiary';
import UserAccountLimits from "./pages/UserAccountLimits";
import UserProfile from "./components/UserProfile/UserProfile";

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
        <Route path="/Limits" element={<Limits />} />
        <Route path="/LimitForm" element={<LimitForm />} />
        <Route path="/Residence" element={<Residence />} />
        <Route path="/Funds" element={<Funds />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Success" element={<Success />} />
          
        {/* User Dashboard Routes */}
        <Route path="/username/userhome" element={<UserHome />} />
        <Route path="/username/transactionhistory" element={<UserTransactionHistory />} />
        <Route path="/username/beneficiary" element={<UserBeneficiary />} />
        <Route path="/username/accountlimits" element={<UserAccountLimits />} />
        <Route path="/username/profile" element={<UserProfile />} />
        
      </Routes>
    </div>
  );
};

export default App;