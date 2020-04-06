import axios from 'axios';
import apiKeys from '../apiKeys.json;

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
  .then((response) => {
    const zeBoards = response.data;
    const boards = [];
  })
  .catch()
})
