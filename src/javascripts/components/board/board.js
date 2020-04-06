// import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';


const buildPins = (boardId) => {
  boardData.getBoards().then(() => {
    smash.getBoardWithPins(boardId)
      .then((singleBoard) => {
        let domString = '';
        domString += `<h2 class="text-center">${singleBoard.name}</h2>`;
        domString += '<div class="d-flex flex-wrap" style="margin-left: 2rem;">';
        singleBoard.pins.forEach((pin) => {
          domString += pinComponent.pinMaker(pin);
        });
        domString += '</div>';
        utils.printToDom('board', domString);
        // $('body').on('click', '.delete-pin', removePin);
      })
      .catch((err) => console.error('buildPins broken', err));
  });
};
const printSelectedBoard = (e) => {
  const buttonId = e.target.id;
  console.error(buttonId, 'buttonId');
  buildPins(buttonId);
};

export default { buildPins, printSelectedBoard };
