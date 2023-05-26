import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep1 from './Components/SignUpStep1';
import SignUpStep2 from './Pages/SignUpStep2';
// import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';
import SignUpStep4 from './Pages/SignUpStep4';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<SignUpStep1 />} />
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<SignUpStep4 />} />
      </Routes>
    </Router>
  );
}
export default App;
