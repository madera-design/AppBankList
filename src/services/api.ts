import axios from 'axios';

const API_URL = 'https://bptapidevmng.azure-api.net/catom/api/challenge/banks';

export const fetchBanks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching banks:', error);
    return [];
  }
};
