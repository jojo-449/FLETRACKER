import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  LandingPage from './pages/LandingPage';
import SplashScreen from './components/SplashScreen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile';
import History from './components/History'
import Notifications from './components/Notifications';
import Devices from './components/Devices';
import EditProfile from './components/EditProfile';
import HelpSupport from './components/HelpSupport';
import BottomNav from './components/BottomNav';
function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/History" element={<History />} />
    <Route path="/Notifications" element={<Notifications />} />
    <Route path="/Devices" element={<Devices />} />
    <Route path="/EditProfile" element={<EditProfile />} />
    <Route path="/HelpSupport" element={<HelpSupport />} />
    <Route path="/BottomNav" element={<BottomNav />} />
    
    

  </Routes>
</Router>
       
      )}
    </>
  );
}

export default App;