import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
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

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default { getPins, deletePin };
