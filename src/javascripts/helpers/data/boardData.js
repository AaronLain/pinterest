import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const zeBoards = response.data;
      console.error(zeBoards, 'boards?');
      const boards = [];
      Object.keys(zeBoards).forEach((boardId) => {
        zeBoards[boardId].id = boardId;
        boards.push(zeBoards[boardId]);
        console.error(boards);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getBoardById = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);


export default { getBoards, getBoardById };
