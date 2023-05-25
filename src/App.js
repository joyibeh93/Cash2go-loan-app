import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep2 from './Pages/SignUpStep2';
return (
  <Routes>
    <Route path="/" element={<SignUpStep2 />} />
    <Route path="/resetpassword" element={<ResetPassword />} />
  </Routes>
);

export default App;
