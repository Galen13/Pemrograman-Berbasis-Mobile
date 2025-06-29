import axios from 'axios';

// Ganti YOUR_COMPUTER_IP dengan alamat IP lokal Anda
const apiClient = axios.create({
  baseURL: 'http://localhost:5000', 
});

export default apiClient;