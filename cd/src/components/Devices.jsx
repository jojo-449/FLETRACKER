import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiPlus, FiLink, FiZap, FiClock, FiSettings, FiX } from 'react-icons/fi';
import BottomNav from '../components/BottomNav';
import braceImg from '../assets/images/braceletsingle.png';
import { api } from '../services/api';
import './Devices.css';

const Devices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states for registering a new device
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDevice, setNewDevice] = useState({
    device_id: "",
    nickname: "",
    safe_latitude: 6.5244,
    safe_longitude: 3.3792,
    safe_radius: 5000
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchDevices = () => {
    setLoading(true);
    api.getDevices()
      .then(res => {
        if (res && res.devices) {
          setDevices(res.devices);
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn("Backend API offline. Using fallback mock devices.", err);
        // Fallback demo device so styling is testable
        setDevices([
          {
            id: 1,
            device_id: "418570",
            nickname: "Johnny's Bracelet (Demo)",
            safe_latitude: 6.5244,
            safe_longitude: 3.3792,
            safe_radius: 5000
          }
        ]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDevice(prev => ({
      ...prev,
      [name]: name.startsWith("safe_") ? parseFloat(value) : value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.registerDevice(newDevice);
      alert(`Successfully registered ${newDevice.nickname}!`);
      setIsModalOpen(false);
      setNewDevice({
        device_id: "",
        nickname: "",
        safe_latitude: 6.5244,
        safe_longitude: 3.3792,
        safe_radius: 5000
      });
      fetchDevices(); // Refresh watch list
    } catch (err) {
      alert(`Registration failed: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="devices-container">
      <header className="page-nav">
        <div className="back-group" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#128555" />
          <span className="nav-title">Devices</span>
        </div>
        <FiPlus 
          size={26} 
          color="#3a6633" 
          style={{ cursor: 'pointer' }} 
          onClick={() => setIsModalOpen(true)}
        />
      </header>

      <main className="devices-content">
        {loading ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Loading devices...</p>
        ) : devices.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>No devices registered yet.</p>
            <button 
              className="device-settings-btn"
              onClick={() => setIsModalOpen(true)}
              style={{ marginTop: '10px' }}
            >
              <FiPlus /> Register First Device
            </button>
          </div>
        ) : (
          devices.map((device) => (
            <div className="device-card card-shadow" key={device.device_id}>
              <div className="device-main">
                <img src={braceImg} alt="Bracelet" className="device-img-small" />
                <div className="device-details">
                  <h3 className="black-title">{device.nickname}</h3>
                  <p className="id-text">ID: {device.device_id}</p>
                  <span className="status-red">Connected (Active)</span>
                </div>
                <button className="connect-btn-small" style={{ backgroundColor: "#3a6633" }}>Paired</button>
              </div>

              <div className="device-stats-grid">
                <div className="stat-unit">
                  <FiZap color="#3a6633" /> 
                  <span>Radius: {device.safe_radius}m</span>
                </div>
                <div className="stat-unit">
                  <FiClock color="#3a6633" /> 
                  <span>Safe Zone: {device.safe_latitude.toFixed(4)}, {device.safe_longitude.toFixed(4)}</span>
                </div>
                <div className="stat-unit">
                  <FiSettings color="#3a6633" /> 
                  <span>Firmware: v1.0.0</span>
                </div>
              </div>

              <button className="device-settings-btn"><FiSettings /> Configure Geofence</button>
            </div>
          ))
        )}
      </main>

      {/* --- INLINE ADD DEVICE MODAL --- */}
      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <div style={modalStyles.header}>
              <h3>Register New Watch</h3>
              <FiX style={{ cursor: "pointer" }} size={24} onClick={() => setIsModalOpen(false)} />
            </div>

            <form onSubmit={handleRegister} style={modalStyles.form}>
              <div style={modalStyles.inputGroup}>
                <label>Watch Device ID (Display on Watch)</label>
                <input 
                  type="text" 
                  name="device_id" 
                  value={newDevice.device_id}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 418570"
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.inputGroup}>
                <label>Nickname (Child's Name)</label>
                <input 
                  type="text" 
                  name="nickname" 
                  value={newDevice.nickname}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Johnny"
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.inputGroup}>
                <label>Safe Center Latitude</label>
                <input 
                  type="number" 
                  step="0.000001"
                  name="safe_latitude" 
                  value={newDevice.safe_latitude}
                  onChange={handleInputChange}
                  required
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.inputGroup}>
                <label>Safe Center Longitude</label>
                <input 
                  type="number" 
                  step="0.000001"
                  name="safe_longitude" 
                  value={newDevice.safe_longitude}
                  onChange={handleInputChange}
                  required
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.inputGroup}>
                <label>Safe Geofence Radius (meters)</label>
                <input 
                  type="number" 
                  name="safe_radius" 
                  value={newDevice.safe_radius}
                  onChange={handleInputChange}
                  required
                  style={modalStyles.input}
                />
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                style={modalStyles.submitBtn}
              >
                {submitting ? "Registering..." : "Add Watch"}
              </button>
            </form>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px"
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
    marginBottom: "15px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  submitBtn: {
    backgroundColor: "#3a6633",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px"
  }
};

export default Devices;