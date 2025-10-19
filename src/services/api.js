const API_URL = "http://localhost:3000/api"; // Update with your backend API URL

export const api = {
  // Add your API endpoints here
  async get(endpoint) {
    const response = await fetch(`${API_URL}${endpoint}`);
    return response.json();
  },

  async post(endpoint, data) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default api;
