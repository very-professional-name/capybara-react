import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignInPage from './pages/signinpage';
import HomePage from './pages/homepage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SignUpPage from './pages/signuppage';

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;