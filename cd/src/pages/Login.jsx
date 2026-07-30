import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiMail, FiLock, FiEye, FiEyeOff, FiCheck } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import './Auth.css';
import { api } from '../services/api';


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="auth-container">
      {/* HEADER WITH FUNCTIONAL BACK BUTTON */}
      <header className="auth-header">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <FiMapPin color="#3a6633" size={24} style={{marginLeft: '10px'}} />
          <span className="logo-text">FLE Tracker</span>
        </div>
        <span className="header-link-green" style={{color: '#3a6633', fontWeight: '700'}}>Welcome back!</span>
      </header>

      <main className="auth-content">
        <h1 className="auth-title-green">Login to your account</h1>
        <p className="auth-subtitle-black">Access your dashboard and track what matters.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          
          {/* EMAIL FIELD */}
          <div className="input-group">
            <label className="label-black">Email address</label>
            <div className="input-wrapper">
              <FiMail className="input-icon-green" />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          {/* PASSWORD FIELD */}
          <div className="input-group">
            <label className="label-black">Password</label>
            <div className="input-wrapper">
              <FiLock className="input-icon-green" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
              />
              <button 
                type="button" 
                className="eye-btn" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {/* FORGOT PASSWORD - MOVED BELOW INPUT */}
            <div className="forgot-password-container">
              <span className="green-link" onClick={() => navigate('/Forgot-Password')}>
                Forgot password?
              </span>
            </div>
          </div>

          {/* REMEMBER ME CHECKBOX */}
          <div className="checkbox-row" onClick={() => setRememberMe(!rememberMe)}>
            <div className={`custom-box ${rememberMe ? 'active' : ''}`}>
              {rememberMe && <FiCheck color="white" size={14} />}
            </div>
            <span className="terms-text-black">Remember me</span>
          </div>

          <button className="auth-primary-btn">Login</button>
        </form>

        <div className="divider"><span>or continue with</span></div>

        {/* SOCIAL LOGINS */}
        <div className="social-row">
          <button type="button" className="social-btn" onClick={() => api.login()}><FcGoogle size={22} /> Google</button>
          <button className="social-btn black-txt"><FaApple size={22} /> Apple</button>
        </div>

        <p className="auth-footer-text">
          Don't have an account? <span style={{color: '#3bd224' , fontSize: '1.0rem'}} className="green-link" onClick={() => navigate('/Signup')}>Sign up</span>
        </p>
      </main>
    </div>
  );
};

export default Login;