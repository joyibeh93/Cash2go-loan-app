import './index.css';
import './App.css';
import DashBoard1_Down from './Components/DashBoard1_Down';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUpStep2 from './Pages/SignUpStep2';
// //import Dashboard from './Pages/Dashboard';
// import ResetPassword from './Pages/ResetPassword';
// import SignUpStep4 from './Pages/SignUpStep4';
// import SignUpStep3 from './Pages/SignUpStep3page';
// import Login from './Pages/Login';
function App() {
  return (
    <DashBoard1_Down />
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Dashboard />} /> */}
    //     <Route path="/" element={<SignUpStep2 />} />
    //     <Route path="/resetpassword" element={<ResetPassword />} />
    //     <Route path="/signupstep4" element={<SignUpStep4 />} />
    //     <Route path="/signupstep3" element={<SignUpStep3 />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
}
export default App;
