import pinData from '../../helpers/data/pinData';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 style="text-align: center;">Board</h2>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        if()
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('board', domString);
      // $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('getPins broken', err));
};

export default { buildPins };
