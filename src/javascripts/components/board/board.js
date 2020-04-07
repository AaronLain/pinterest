import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';


const buildPins = (boardId) => {
  boardData.getBoards().then(() => {
    smash.getBoardWithPins(boardId)
      .then((singleBoard) => {
        let domString = '';
        domString += `<div id="${singleBoard.id}" class="board-title">`;
        console.error(singleBoard.id, 'singleBoard.id');
        domString += `<h2 class="text-center">${singleBoard.name}</h2>`;
        domString += '<div class="d-flex flex-wrap" style="margin-left: 2rem;">';
        singleBoard.pins.forEach((pin) => {
          if (pin) domString += pinComponent.pinMaker(pin);
        });
        domString += '</div>';
        domString += '</div>';
        utils.printToDom('board', domString);
        // eslint-disable-next-line no-use-before-define
        $('body').on('click', '.delete-pin', removePin);
        return boardId;
      })
      .catch((err) => console.error('buildPins broken', err));
  });
};

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  const divId = e.target.closest('.board-title').id;
  console.error(divId, 'divId');
  console.error(pinId, 'pinId remove');
  pinData.deletePin(pinId).then(() => buildPins(`${divId}`)).catch((err) => console.error('could not delete cow', err));
};

const printSelectedBoard = (e) => {
  const buttonId = e.target.id;
  console.error(buttonId, 'buttonId');
  buildPins(buttonId);
};

export default { buildPins, printSelectedBoard };
