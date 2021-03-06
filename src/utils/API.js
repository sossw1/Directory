import axios from 'axios';

const API = {
  search: function() {
    return axios.get('https://randomuser.me/api/?results=50&nat=us');
  }
}

// Export an object with a "search" method that searches the Giphy API for the passed query
export default API;