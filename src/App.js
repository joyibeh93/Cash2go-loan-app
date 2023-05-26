import './index.css';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUpStep2 from './Pages/SignUpStep2';
import SignUpStep1 from './Components/SignUpStep1'

const App = () => {

  return (

    <SignUpStep1 />

    // <Routes>

    //   <Route path="/" element={<SignUpStep2 />} />
    //  <Route path="/resetpassword" element={<ResetPassword />} />

    // </Routes>


  )
}

export default App;
