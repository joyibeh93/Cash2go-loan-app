import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep4 from './Pages/SignUpStep4';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="" element={<SignUpStep4 />} />
      </Routes>
    </Router>
  );
}

export default App;
