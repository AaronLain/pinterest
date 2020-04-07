import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPinByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boardPins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const zeBoardPins = response.data;
      console.error(zeBoardPins, 'zeBoardPins');
      const boardPins = [];
      Object.keys(zeBoardPins).forEach((boardPinId) => {
        zeBoardPins[boardPinId].id = boardPinId;
        // const bPinId = zeBoardPins[boardPinId].pinId;
        boardPins.push(zeBoardPins[boardPinId]);
      });
      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

export default { getBoardPinByBoardId };
