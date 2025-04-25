let API_URL: string;

if (import.meta.env.MODE === 'development') {
  API_URL = 'http://localhost:5000';
} else {
  // Use your EC2 public IP
  API_URL = 'http://52.66.179.66';
}

export default API_URL;
