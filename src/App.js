import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpStep2 from './Pages/SignUpStep2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpStep2 />} />
      </Routes>
    </Router>
  );
}

export default App;
