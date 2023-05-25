import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep2 from './Pages/SignUpStep2';
import ResetPassword from './Pages/ResetPassword';
import ResetStep2 from './Pages/ResetStep2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<ResetStep2 />} />
      </Routes>
    </Router>
  );
}

export default App;
