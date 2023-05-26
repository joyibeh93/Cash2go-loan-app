import './index.css';
import './App.css';
<<<<<<< HEAD
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUpStep2 from './Pages/SignUpStep2';
import SignUpStep1 from './Components/SignUpStep1'

const App = () => {
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep2 from './Pages/SignUpStep2';
// import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';
import SignUpStep4 from './Pages/SignUpStep4';
>>>>>>> dev1

  return (
<<<<<<< HEAD

    <SignUpStep1 />

    // <Routes>

    //   <Route path="/" element={<SignUpStep2 />} />
    //  <Route path="/resetpassword" element={<ResetPassword />} />

    // </Routes>


  )
=======
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<SignUpStep4 />} />
      </Routes>
    </Router>
  );
>>>>>>> dev1
}
export default App;
