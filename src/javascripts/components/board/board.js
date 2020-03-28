import pinData from '../../helpers/data/pinData';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap" style="margin-left: 2rem;">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('board', domString);
      // $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('getPins broken', err));
};


export default { buildPins };
