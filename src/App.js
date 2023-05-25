import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MainOtp from './Components/MainOtp';
//import SignUpStep2 from './Pages/SignUpStep2';
import SignUpStep3page from './Pages/SignUpStep3page';

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/signupstep2" element={<SignUpStep2 />} />*/}
        <Route path="/signupstep3" element={<SignUpStep3page />} />
      </Routes>
    </Router>
  );
}

export default App;
