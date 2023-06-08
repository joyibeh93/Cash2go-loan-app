import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUpStep1 from './Pages/SignUpStep1';
import SignUpStep2 from './Pages/SignUpStep2';
import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';
import SignUpStep4 from './Pages/SignUpStep4';
import SignUpStep3 from './Pages/SignUpStep3page';
import Login from './Pages/Login';
import PasswordResetPage from './Pages/PasswordResetPage';
import PredictionInfoPage from './Pages/PredictionInfoPage';
import ContactInfoPage from './Pages/ContactInfoPage';
import ResetPassword3page from './Pages/ResetPassword3page';
import BvnPage from './Pages/BvnPage';
function App() {
  return (
    <Router>
      <Routes>
         <Route path="/bvn" element={<BvnPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signupstep4" element={<SignUpStep4 />} />
        <Route path="/signupstep3" element={<SignUpStep3 />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/signupstep1" element={<SignUpStep1 />} />
        <Route path="/resetpassword2" element={<PasswordResetPage />} />
        <Route path="/predictioninfo" element={<PredictionInfoPage />} />
        <Route path="/contactinfo" element={<ContactInfoPage />} />
        <Route path="/resetpassword3" element={<ResetPassword3page />} />
        <Route path="/bvn" element={<BvnPage />} />
        <Route path="/loandefault" element={<LoanDefaultPage />} />
      </Routes>
    </Router>
  );
}
export default App;
