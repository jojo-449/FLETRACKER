/**
 * Backend API Client Service
 * 
 * Provides simple, reusable functions to communicate with the Elysia backend.
 * Handles credential cookies automatically for authentication sessions.
 */

const API_BASE_URL = "http://localhost:8000";

// Helper to make API fetch requests with cookie credentials enabled
async function fetchFromBackend(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Ensure session cookies are sent and received (critical for Expo/Web)
  options.credentials = "include";
  
  if (options.body && typeof options.body === "object") {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
    options.body = JSON.stringify(options.body);
  }

  const response = await fetch(url, options);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

export const api = {
  /**
   * Triggers the Google OAuth login flow by redirecting the browser.
   */
  login() {
    window.location.href = `${API_BASE_URL}/login`;
  },

  /**
   * Logs out the user by clearing the session cookie and redirecting.
   */
  logout() {
    window.location.href = `${API_BASE_URL}/logout`;
  },

  /**
   * Fetches the current user's profile details.
   */
  async getProfile() {
    return fetchFromBackend("/profile");
  },

  /**
   * Updates user profile fields (name, phone_number, profile_picture, push_token).
   */
  async updateProfile(profileData) {
    return fetchFromBackend("/profile", {
      method: "PUT",
      body: profileData,
    });
  },

  /**
   * Registers a new watch device under the logged-in parent's account.
   * Expected fields: { device_id, nickname, safe_latitude, safe_longitude, safe_radius }
   */
  async registerDevice(deviceData) {
    return fetchFromBackend("/watch/register", {
      method: "POST",
      body: deviceData,
    });
  },

  /**
   * Fetches all devices registered by the parent.
   */
  async getDevices() {
    return fetchFromBackend("/watch/devices");
  },

  /**
   * Fetches the location history log for a specific device.
   */
  async getDeviceHistory(deviceId) {
    return fetchFromBackend(`/watch/history/${deviceId}`);
  },

  /**
   * Mock Telemetry Ping (For testing watch telemetry directly from frontend).
   * Expected fields: { device_id, latitude, longitude }
   */
  async sendTelemetryPing(pingData) {
    return fetchFromBackend("/watch/ping", {
      method: "POST",
      body: pingData,
    });
  }
};
