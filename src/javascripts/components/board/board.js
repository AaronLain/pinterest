import pinData from '../../helpers/data/pinData';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';

const buildPins = (divId) => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap" style="margin-left: 2rem;">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom(`${divId}`, domString);
      // $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('getPins broken', err));
};

// const printSelectedBoard = (e) => {
//   const buttonId = e.target.id;
//   console.error(buttonId);
// }


export default { buildPins };
