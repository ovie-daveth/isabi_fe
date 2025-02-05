import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/button';
import SignUp from './pages/auth/signup';
import { Route, Routes } from 'react-router-dom';
import OTPpage from './pages/auth/otp-page';
import TestQuestion from './pages/auth/testQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/otp" element={<OTPpage />} />
      <Route path="/test-questions" element={<TestQuestion    />} />
    </Routes>
  );
}

export default App;
