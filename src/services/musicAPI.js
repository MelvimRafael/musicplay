import axios from 'axios';

const API_BASE_URL = 'https://itunes.apple.com';

const musicAPI = {
  searchMusic: async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: {
          term: query,
          media: 'music',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching music:', error);
      throw error;
    }
  },

  getMusicById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/lookup`, {
        params: {
          id,
          entity: 'song',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching music:', error);
      throw error;
    }
  },

  getAllMusic: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: {
          term: '*',
          media: 'music',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching all music:', error);
      throw error;
    }
  },
  listAllMusic: async () => {
    try {
      
     
const response = await axios.get(`${API_BASE_URL}/search`, {
        params: {
          term: 'music',
          
         
media: 'music',
        },
      });
      return response.data.results;
    } catch (error) {
      
     
console.error('Error fetching all music:', error);
      throw error;
    }
  },
};


export default musicAPI;
