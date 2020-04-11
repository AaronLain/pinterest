import firebase from 'firebase/app';
import 'firebase/auth';
import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';

const getCurrentUid = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid).then().catch();
};

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  const divId = e.target.closest('.board-title').id;
  // eslint-disable-next-line no-use-before-define
  pinData.deletePin(pinId).then(() => buildSingleBoardWithPins(`${divId}`))
    .catch((err) => console.error('could not delete pin', err));
};

const buildSingleBoardWithPins = (boardId) => {
  smash.getBoardWithPins(boardId)
    .then((singleBoard) => {
      let domString = '';
      const singleBoardName = singleBoard.name[0].toUpperCase() + singleBoard.name.slice(1);
      domString += `<div id="${singleBoard.id}" class="board-title d-flex flex-column">`;
      domString += `<button style="align-self: center; width: 33%; margin: 2em auto 2em;" id="${singleBoard.id}" class="btn btn-primary"><h2>${singleBoardName}</h2></button>`;
      domString += '<div class="d-flex flex-wrap justify-content-center" style="margin: 2rem;">';
      singleBoard.pins.forEach((pin) => {
        if (pin) domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom(`${boardId}`, domString);
      // eslint-disable-next-line no-use-before-define
      return boardId;
    })
    .catch((err) => console.error('buildPins broken', err));
};

const buildAllBoards = () => {
  buildSingleBoardWithPins('board1');
  buildSingleBoardWithPins('board2');
  buildSingleBoardWithPins('board3');
  buildSingleBoardWithPins('board4');
};


const makeAPin = (e) => {
  e.preventDefault();
  const selectedBoard = $("input[name='boardRadios']:checked").val();
  const newPin = {
    name: $('#pin-name').val(),
    imageUrl: $('#pin-image').val(),
    boardId: `${selectedBoard}`,
  };
  utils.printToDom('form-container', '');
  $('.add-button').addClass('collapsed');
  pinData.addPin(newPin).then(() => buildAllBoards())
    .catch((err) => console.error('addPin broke', err));
};

export default {
  buildAllBoards,
  buildSingleBoardWithPins,
  getCurrentUid,
  makeAPin,
  removePin,
};
