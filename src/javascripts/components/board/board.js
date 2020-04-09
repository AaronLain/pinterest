import firebase from 'firebase/app';
import 'firebase/auth';
import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
// import boardPinData from '../../helpers/data/boardPinData';
import smash from '../../helpers/data/smash';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';

const getCurrentUid = () => {
  const myUid = firebase.auth().currentUser.uid;
  console.error(myUid);
  boardData.getBoardsByUid(myUid).then().catch();
};

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  const divId = e.target.closest('.board-title').id;
  console.error(divId, 'divId');
  console.error(pinId, 'pinId remove');
  // eslint-disable-next-line no-use-before-define
  pinData.deletePin(pinId).then(() => buildPins(`${divId}`))
    .catch((err) => console.error('could not delete pin', err));
};

const buildPins = (boardId) => {
  boardData.getBoards().then(() => {
    smash.getBoardWithPins(boardId)
      .then((singleBoard) => {
        let domString = '';
        const singleBoardName = singleBoard.name[0].toUpperCase() + singleBoard.name.slice(1);
        domString += `<div id="${singleBoard.id}" class="board-title">`;
        domString += `<h2 class="text-center">${singleBoardName}</h2>`;
        domString += '<div class="d-flex flex-wrap" style="margin-left: 2rem;">';
        singleBoard.pins.forEach((pin) => {
          if (pin) domString += pinComponent.pinMaker(pin);
        });
        domString += '</div>';
        domString += '</div>';
        utils.printToDom('board', domString);
        console.error(singleBoard, 'singleBoard');
        $('body').on('click', '.delete-pin', removePin);
        // eslint-disable-next-line no-use-before-define
        return boardId;
      })
      .catch((err) => console.error('buildPins broken', err));
  });
};

// const makeABoardPin = (newPin) => {
//   const newBoardPin = {
//     pinId: `pin${newPin.length + 1}`,
//     boardId: 'board4',
//   };
//   console.error(newBoardPin.id, 'newBoardPin.id');
//   boardPinData.addBoardPin(newBoardPin);
// };

const makeAPin = (e) => {
  e.preventDefault();
  const newPin = {
    name: $('#pin-name').val(),
    type: $('#pin-type').val(),
    imageUrl: $('#pin-image').val(),
  };
  console.error(newPin.id, 'newPin.id');
  pinData.addPin(newPin).then(() => buildPins('board4'))
    .catch((err) => console.error('addPin broke', err));
};

const printSelectedBoard = (e) => {
  const buttonId = e.target.id;
  buildPins(buttonId);
};

export default {
  buildPins,
  printSelectedBoard,
  getCurrentUid,
  makeAPin,
};
