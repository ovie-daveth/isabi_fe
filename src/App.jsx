import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/auth/signup';
import SignIn from "./pages/auth/login";
import OTPpage from './pages/auth/otp-page';
import TestQuestion from './pages/auth/testQ';
import ResetPassword from './pages/auth/resetpassword';
import ResetOTPpage from './pages/auth/resetotp';
import NewPassword from './pages/auth/new-password';
import LandingPage from './pages/landing/page';
import StudyPackages from './pages/learning/study-packages/page';
import SingleSubject from './pages/learning/singleSubject/page';
import { token } from './lib/helpers';

function App() {


  console.log("token cookie", token)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />



      {/* AUTH */}

      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/otp/:id" element={<OTPpage />} />
      <Route path="/auth/test-questions" element={<TestQuestion />} />
      <Route path="/auth/login" element={<SignIn />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      {/* <Route path="/auth/reset-otp" element={<ResetOTPpage />} /> */}
      <Route path="/auth/new-password" element={<NewPassword />} />

      {/* Study package */}
      <Route path="/study-package" element={<StudyPackages />} />
      <Route path="/study-package/:subject" element={<SingleSubject />} />
    </Routes>
  );
}

export default App;
