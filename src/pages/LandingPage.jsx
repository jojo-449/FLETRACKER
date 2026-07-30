// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   FiMapPin, FiBell, FiShield, FiBattery, FiDroplet, 
//   FiCheckCircle, FiUsers, FiTarget, FiHeadphones 
// } from 'react-icons/fi';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// import natureBg from '../assets/images/natureBg.jpg';
// import bracePhone from '../assets/images/bracephone.png';
// import braceletSingle from '../assets/images/braceletsingle.png';
// import phoneSingle from '../assets/images/phonesinglewbg.png';
// import locationSingle from '../assets/images/locationsingle.png';
// import testimonialBg from '../assets/images/testimonialbgfledark.jpg';

// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="landing-container">
//       {/* HERO SECTION */}
//       <section className="hero" style={{ backgroundImage: `url(${natureBg})` }}>
//         <nav className="navbar">
//           <div className="nav-inner">
//             <div className="logo-group">
//               <FiMapPin color="#3a6633" size={24} />
//               <span className="logo-text">FLE Tracker</span>
//             </div>
//             <div className="nav-links-desktop">
//               <a href="#home">Home</a>
//               <a href="#features">Features</a>
//               <a href="#how">How It Works</a>
//               <a href="#benefits">Benefits</a>
//               <a href="#faq">FAQ</a>
//             </div>
//             <button className="nav-btn" onClick={() => navigate('/Signup')}>Get Started</button>
//           </div>
//         </nav>

//         <div className="hero-content">
//           <div className="hero-text-side">
//             <h1 className="hero-brand">FLE Tracker</h1>
//             <h2 className="hero-title">Find Location Easily</h2>
//             <p className="hero-desc" style={{ color: '#020202' }}>
//               Smart bracelet. Real-time tracking.<br />Peace of mind, everywhere.
//             </p>
//             <div className="hero-btns">
//               <button className="btn-primary" onClick={() => navigate('/Signup')}>Get Your Bracelet</button>
//               <button className="btn-secondary">Learn More →</button>
//             </div>
//           </div>

//           <div className="hero-image-side">
//             <img src={bracePhone} alt="Mockup" className="hero-img" />
//           </div>
//         </div>
//       </section>

//       {/* OTHER SECTIONS (Features, How it Works, etc.) */}
//       <section className="features-section" id="features" >
//         <div className="features-grid" style={{ color: '#0b0b0b' }}>
//           <Feature Icon={FiMapPin} title="Real-time Tracking" desc=  "Track live locations." />
//           <Feature Icon={FiBell} title="Instant Alerts" desc="Get notified fast." />
//           <Feature Icon={FiShield} title="Geofence" desc="Set safe zones." />
//           <Feature Icon={FiBattery} title="Long Battery" desc="Made to last." />
//           <Feature Icon={FiDroplet} title="Water Resistant" desc="Everyday use." />
//         </div>
//       </section>

//       <section className="how-it-works" id="how">
//         <span className="tagline">● HOW IT WORKS ●</span>
//         <h2 className="section-title" style={{ color: '#2e5a27' }}>Simple. Smart. Secure.</h2>
//         <div className="steps-container" style={{ color: '#080808' }}>
//           <Step num="1" img={braceletSingle} title="Wear the Bracelet" desc="Comfortable for everyday use." />
//           <Step num="2" img={phoneSingle} title="Connect the App" desc="Sync with the FLE Tracker app." />
//           <Step num="3" img={locationSingle} title="Track in Real-time" desc="View location anytime." />
//         </div>
//       </section>

//       <section className="why-choose">
//         <div className="why-content">
//           <h2 className="section-title-left" style={{ color: '#2e5a27' }}>Why Choose FLE Tracker?</h2>
//           <CheckItem label="Accurate & Reliable Tracking" />
//           <CheckItem label="Easy to Use App" />
//           <CheckItem label="Designed for Everyone" />
//           <CheckItem label="Your Safety, Our Priority" />
//           <button className="btn-primary big-btn" onClick={() => navigate('/Signup')}>Get Started</button>
//         </div>
//         <div className="testimonial-card" style={{ backgroundImage: `url(${testimonialBg})` }}>
//           <div className="testimonial-overlay">
           
//             <p className="testimonial-text">FLE Tracker gives me peace of mind knowing my loved ones are safe.</p>
//             <p className="testimonial-user">— Happy User</p>
//           </div>
//         </div>
//       </section>

//       <section className="stats-bar">
//         <Stat Icon={FiUsers} val="10K+" label="Active Users" />
//         <Stat Icon={FiTarget} val="99.9%" label="Accuracy" />
//         <Stat Icon={FiHeadphones} val="24/7" label="Support" />
//       </section>

//       <footer className="footer">
//         <div className="footer-top">
//           <div className="logo-group">
//             <FiMapPin color="#dae9de" size={20} />
//             <span className="logo-text white">FLE Tracker</span>
//           </div>
//           <div className="socials">
//             <FaFacebook className="social-icon" />
//             <FaTwitter className="social-icon" />
//             <FaInstagram className="social-icon" />
//           </div>
//         </div>
//         <p className="copyright">© 2026 FLE Tracker. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// const Feature = ({ Icon, title, desc }) => (
//   <div className="feat-item">
//     <div className="icon-circle"><Icon color="#3a6633" size={22} /></div>
//     <h3>{title}</h3>
//     <p>{desc}</p>
//   </div>
// );

// const Step = ({ num, img, title, desc }) => (
//   <div className="step-item">
//     <div className="step-img-wrapper"><span className="step-number">{num}</span><img src={img} alt="step" /></div>
//     <h3>{title}</h3>
//     <p>{desc}</p>
//   </div>
// );

// const CheckItem = ({ label }) => (
//   <div className="check-row"><FiCheckCircle color="#3a6633" size={20} /><span className="check-text-black">{label}</span></div>
// );

// const Stat = ({ Icon, val, label }) => (
//   <div className="stat-item"><Icon color="#3a6633" size={28} /><div><h4 className="stat-val-black">{val}</h4><p className="stat-lab-black">{label}</p></div></div>
// );

// export default Home;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMapPin, FiBell, FiShield, FiBattery, FiDroplet, 
  FiCheckCircle, FiUsers, FiTarget, FiHeadphones, FiMenu, FiX 
} from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// VITE IMPORTS
import natureBg from '../assets/images/natureBg.jpg';
import bracePhone from '../assets/images/bracephone.png';
import braceletSingle from '../assets/images/braceletsingle.png';
import phoneSingle from '../assets/images/phonesinglewbg.png';
import locationSingle from '../assets/images/locationsingle.png';
import testimonialBg from '../assets/images/testimonialbgfledark.jpg';

import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="landing-container">
      
      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div className="drawer-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} />
            <motion.div className="drawer-menu" initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25 }}>
              <div className="drawer-header">
                <FiMapPin color="#3a6633" size={24} />
                <FiX size={30} onClick={() => setIsMenuOpen(false)} />
              </div>
              <div className="drawer-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#how">How It Works</a>
                <a href="#benefits">Benefits</a>
                <a href="#faq">FAQ</a>
                <button className="drawer-btn" onClick={() => navigate('/Signup')}>Get Started</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: `url(${natureBg})` }}>
        <nav className="navbar">
          <div className="nav-inner">
            <div className="hamburger" onClick={() => setIsMenuOpen(true)}><FiMenu size={28} /></div>
            <div className="logo-group">
              <FiMapPin color="#3a6633" size={22} />
              <span className="logo-text">FLE Tracker</span>
            </div>
            <div className="nav-links-desktop">
              <a href="#home">Home</a><a href="#features">Features</a><a href="#how">How It Works</a><a href="#benefits">Benefits</a><a href="#faq">FAQ</a>
            </div>
            <button className="nav-btn" onClick={() => navigate('/Signup')}>Get Started</button>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="brand-title">FLE Tracker</h1>
            <h2 className="hero-headline">Find Location Easily</h2>
            <p className="hero-sub">Smart bracelet. Real-time tracking.<br />Peace of mind, everywhere.</p>
            <div className="hero-btns">
              <button className="btn-solid" onClick={() => navigate('/Signup')}>Get Your Bracelet</button>
              <button className="btn-outline">Learn More →</button>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={bracePhone} alt="FLE Mockup" className="hero-device-img" />
          </div>
        </div>
      </section>

      {/* FEATURES (White Overlap Box) */}
      <section className="features-overlap">
        <div className="features-grid">
          <Feat Icon={FiMapPin} title="Real-time Tracking" desc="Track live locations." />
          <Feat Icon={FiBell} title="Instant Alerts" desc="Get notified fast." />
          <Feat Icon={FiShield} title="Geofence" desc="Set safe zones." />
          <Feat Icon={FiBattery} title="Long Battery Life" desc="Made to last." />
          <Feat Icon={FiDroplet} title="Water Resistant" desc="Built for use." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="process-section">
        <span className="mini-tag">● HOW IT WORKS ●</span>
        <h2 className="process-title">Simple. Smart. Secure.</h2>
        <div className="process-row">
          <Step img={braceletSingle} title="Wear the Bracelet" desc="Comfortable and stylish." />
          <Step img={phoneSingle} title="Connect the App" desc="Sync with the FLE app." />
          <Step img={locationSingle} title="Track in Real-time" desc="View location anytime." />
        </div>
      </section>

      {/* WHY CHOOSE & TESTIMONIAL */}
      <section className="why-split">
        <div className="why-left">
          <h2 className="why-header">Why Choose FLE Tracker?</h2>
          <div className="checks">
            <Check text="Accurate & Reliable Tracking" />
            <Check text="Easy to Use App" />
            <Check text="Designed for Everyone" />
            <Check text="Your Safety, Our Priority" />
          </div>
          <button className="btn-solid mt-30" onClick={() => navigate('/Signup')}>Get Started</button>
        </div>
        <div className="why-right testimonial-card" style={{ backgroundImage: `url(${testimonialBg})` }}>
          <div className="testimonial-overlay">
            <span className="quote-mark">“</span>
            <p className="quote-text">FLE Tracker gives me peace of mind knowing my loved ones are always safe.</p>
            <p className="quote-author">- Happy User</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
         <Stat Icon={FiUsers} v="10K+" l="Active Users" />
         <Stat Icon={FiTarget} v="99.9%" l="Accuracy" />
         <Stat Icon={FiHeadphones} v="24/7" l="Support" />
         <Stat Icon={FiShield} v="Trusted" l="by Families" />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo-group"><FiMapPin color="#fff" size={20} /><span className="logo-text white">FLE Tracker</span></div>
          <div className="footer-links-row"><a href="#h">Home</a><a href="#f">Features</a><a href="#w">How It Works</a><a href="#fa">FAQ</a><a href="#c">Contact</a></div>
          <div className="socials-row"><FaFacebook /><FaTwitter /><FaInstagram /></div>
        </div>
        <p className="copy">© 2026 FLE Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Internal Components
const Feat = ({ Icon, title, desc }) => (
  <div className="feat-item"><div className="icon-circ"><Icon color="#3a6633" size={22} /></div><h4>{title}</h4><p>{desc}</p></div>
);
const Step = ({ img, title, desc }) => (
  <div className="step-item"><img src={img} alt="step" /><h4>{title}</h4><p>{desc}</p></div>
);
const Check = ({ text }) => (
  <div className="check-line"><FiCheckCircle color="#3a6633" size={20} /><span>{text}</span></div>
);
const Stat = ({ Icon, v, l }) => (
  <div className="stat-unit"><Icon color="#3a6633" size={26} /><div><span className="st-v">{v}</span><span className="st-l">{l}</span></div></div>
);

export default LandingPage;