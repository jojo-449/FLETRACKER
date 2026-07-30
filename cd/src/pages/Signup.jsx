// // --- SIGNUP PAGE ---
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiMapPin, FiUser, FiMail, FiPhone, FiLock, FiEye, FiCheck } from 'react-icons/fi';
// import { FcGoogle } from 'react-icons/fc';
// import { FaApple } from 'react-icons/fa';
// import './Auth.css';

// const Signup = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="auth-container">
//       <header className="auth-header">
//         <div className="logo-group" onClick={() => navigate('/')}>
//           <FiMapPin color="#3a6633" size={24} />
//           <span className="logo-text">FLE Tracker</span>
//         </div>
//         <span className="header-link-green" onClick={() => navigate('/Login')}>Create account</span>
//       </header>

//       <main className="auth-content signup-width">
//         <h1 className="auth-title-green">Create your account</h1>
//         <p className="auth-subtitle-black">Join FLE Tracker and stay connected.</p>

//         <form className="auth-form">
//           <div className="form-grid">
//             <div className="input-group">
//               <label className="label-black">Full name</label>
//               <div className="input-wrapper">
//                 <FiUser className="input-icon-green" />
//                 <input type="text" placeholder="Enter your full name" />
//               </div>
//             </div>
//             <div className="input-group">
//               <label className="label-black">Email address</label>
//               <div className="input-wrapper">
//                 <FiMail className="input-icon-green" />
//                 <input type="email" placeholder="Enter your email" />
//               </div>
//             </div>
//           </div>

//           <div className="input-group">
//             <label className="label-black">Phone number</label>
//             <div className="input-wrapper">
//               <FiPhone className="input-icon-green" />
//               <input type="tel" placeholder="Enter your phone number" />
//             </div>
//           </div>

//           <div className="input-group">
//             <label className="label-black">Password</label>
//             <div className="input-wrapper">
//               <FiLock className="input-icon-green" />
//               <input type="password" placeholder="Create a password" />
              
//               <FiEye className="eye-icon-green" />
//             </div>
//           </div>

//           <div className="input-group">
//             <label className="label-black">Confirm password</label>
//             <div className="input-wrapper">
//               <FiLock className="input-icon-green" />
//               <input type="password" placeholder="Confirm your password" />
//               <FiEye className="eye-icon-green" />
//             </div>
//           </div>

//           <div className="checkbox-row">
//             <div className="custom-checkbox checked">
//               <FiCheck color="white" size={14} />
//             </div>
//             <p className="terms-text-black">
//               I agree to the <span className="green-link">Terms of Service</span> and <span className="green-link">Privacy Policy</span>
//             </p>
//           </div>

//           <button className="auth-primary-btn">Sign Up</button>
//         </form>

//         <div className="divider"><span>or continue with</span></div>

//         <div className="social-row">
//           <button className="social-btn"><FcGoogle size={20} /> Google</button>
//           <button className="social-btn apple-btn"><FaApple size={20} /> Apple</button>
//         </div>

//         <p className="auth-footer-text-black">
//           Already have an account? <span className="green-link" onClick={() => navigate('/Login')}>Login</span>
//         </p>
//       </main>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiCheck } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import './Auth.css';
import { api } from '../services/api';


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="auth-container">
      {/* HEADER WITH BACK BUTTON */}
      <header className="auth-header">
        <div className="back-group" onClick={() => navigate('/')}>
          <FiArrowLeft size={24} color="#1a1a1a" />
          <FiMapPin color="#3a6633" size={24} style={{marginLeft: '10px'}} />
          <span className="logo-text">FLE Tracker</span>
        </div>
        <span className="header-link-green" style={{color: '#3a6633', fontWeight: '700'}}>Create account</span>
      </header>

      <main className="auth-content signup-width">
        <h1 className="auth-title-green">Create your account</h1>
        <p className="auth-subtitle-black">Join FLE Tracker and stay connected.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="input-group">
              <label className="label-black">Full name</label>
              <div className="input-wrapper">
                <FiUser className="input-icon-green" />
                <input type="text" placeholder="Enter your full name" />
              </div>
            </div>
            <div className="input-group">
              <label className="label-black">Email address</label>
              <div className="input-wrapper">
                <FiMail className="input-icon-green" />
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label className="label-black">Phone number</label>
            <div className="input-wrapper">
              <FiPhone className="input-icon-green" />
              <input type="tel" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="input-group">
            <label className="label-black">Password</label>
            <div className="input-wrapper">
              <FiLock className="input-icon-green" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a password" 
              />
              <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* INTERACTIVE CHECKBOX */}
          <div className="checkbox-row" onClick={() => setAgreed(!agreed)}>
            <div className={`custom-box ${agreed ? 'active' : ''}`}>
              {agreed && <FiCheck color="white" size={14} />}
            </div>
            <p className="terms-text-black" style={{fontSize: '0.85rem'}}>
              I agree to the <span className="green-link">Terms of Service</span> and <span className="green-link">Privacy Policy</span>
            </p>
          </div>

          <button className="auth-primary-btn">Sign Up</button>
        </form>

        <div className="divider"><span>or continue with</span></div>

        <div className="social-row">
          <button type="button" className="social-btn" onClick={() => api.login()}><FcGoogle size={20} /> Google</button>
          <button className="social-btn black-txt"><FaApple size={20} /> Apple</button>
        </div>

        <p className="auth-footer-text" >
          Already have an account? <span  style={{color: '#3bd224' , fontSize: '1.0rem'}} className="green-link" onClick={() => navigate('/Login')}>Login</span>
        </p>
      </main>
    </div>
  );
};

export default Signup;