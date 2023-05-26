import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep2 from './Pages/SignUpStep2';
import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';
import SignUpStep3page from './Pages/SignUpStep3page';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signupstep3" element={<SignUpStep3page />} />
      </Routes>
    </Router>
  );
}

export default App;
