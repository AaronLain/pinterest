import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const zePins = response.data;
      const pins = [];
      if (zePins) {
        Object.keys(zePins).forEach((pinId) => {
          zePins[pinId].id = pinId;
          pins.push(zePins[pinId]);
        });
      }
      resolve(pins);
    })
    .catch((err) => console.error('get Pins broke', reject(err)));
});

const getSinglePin = (pinId) => axios.get(`${baseUrl}/pins/${pinId}.json`);

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const addPin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

const updatePin = (pinId, modifiedPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, modifiedPin);

export default {
  getPins,
  deletePin,
  addPin,
  getSinglePin,
  updatePin,
};
