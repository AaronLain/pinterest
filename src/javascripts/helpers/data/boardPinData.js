import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPinByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boardPins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const zeBoardPins = response.data;
      const boardPins = [];
      console.error(boardPins, 'boardPins');
      Object.keys(zeBoardPins).forEach((boardPinId) => {
        zeBoardPins[boardPinId].id = boardPinId;
        // const bPinId = zeBoardPins[boardPinId].pinId;
        // console.error(bPinId, 'bPinId');
        boardPins.push(zeBoardPins[boardPinId]);
        // boardPins.push(zeBoardPins[bPinId]);
      });
      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

const addBoardPin = (newBoardPin) => axios.post(`${baseUrl}/boardPins.json`, newBoardPin);

export default { getBoardPinByBoardId, addBoardPin };
