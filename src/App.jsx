import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/auth/signup';
import SignIn from "./pages/auth/login";
import OTPpage from './pages/auth/otp-page';
import TestQuestion from './pages/auth/testQ';
import ResetPassword from './pages/auth/resetpassword';
import ResetOTPpage from './pages/auth/resetotp';
import NewPassword from './pages/auth/new-password';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<OTPpage />} />
      <Route path="/test-questions" element={<TestQuestion />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-otp" element={<ResetOTPpage />} />
      <Route path="/new-password" element={<NewPassword />} />
    </Routes>
  );
}

export default App;
