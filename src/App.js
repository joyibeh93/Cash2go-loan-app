import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep2 from './Pages/SignUpStep2';
import ResetPassword from './Pages/ResetPassword';
import SignUpStep4 from './Pages/SignUpStep4';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signupstep4" element={<SignUpStep4 />} />
      </Routes>
    </Router>
  );
}
export default App;
