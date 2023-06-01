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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signupstep4" element={<SignUpStep4 />} />
        <Route path="/signupstep3" element={<SignUpStep3 />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<SignUpStep1 />} />
      </Routes>
    </Router>
      );
}
export default App;
