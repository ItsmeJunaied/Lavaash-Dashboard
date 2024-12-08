import axios from 'axios';

// Replace this with your actual base URL or pass it dynamically
const baseUrl = 'https://messagecapture.onrender.com'; 

export const fetchCurrentUser = async ({ email, teamName, planName }) => {
  const response = await axios.get(`${baseUrl}/currentUser`, {
    params: {
      email,
      teamName,
      planName
    }
  });
  return response.data;
};
