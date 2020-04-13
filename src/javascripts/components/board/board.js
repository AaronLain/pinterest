import firebase from 'firebase/app';
import 'firebase/auth';
import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import pinComponent from '../pins/pins';
import utils from '../../helpers/utils';
import editPin from '../editPin/editPin';

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
      console.error(singleBoard, 'singleboard');
      let domString = '';
      const singleBoardName = singleBoard.name[0].toUpperCase() + singleBoard.name.slice(1);
      domString += `<h2>${singleBoardName}</h2>`;
      domString += `<button style="width: 33%; margin: 2em auto 2em;" id="${singleBoard.id}" 
                    class="btn btn-primary board-button d-flex justify-content-center">
                    Show ${singleBoardName} Only</button>`;
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

const printOnlySelectedBoard = (e) => {
  const selectedBoard = e.target.id;
  console.error(selectedBoard);
  let domString = '';
  utils.printToDom('board', '');
  domString += '<div id="board1" class=""></div>';
  domString += '<div id="board2" class=""></div>';
  domString += '<div id="board3" class=""></div>';
  domString += '<div id="board4" class=""></div>';
  utils.printToDom('board', domString);
  buildSingleBoardWithPins(`${selectedBoard}`);
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

const editPinEvent = (e) => {
  e.preventDefault();
  const pinId = e.target.closest('.card').id;
  console.error(pinId, 'edit Pin event pinId');
  editPin.editPinModalForm(pinId);
};

const modifyPin = (e) => {
  e.preventDefault();
  const selectedBoard = $("input[name='editBoardRadios']:checked").val();
  const pinId = e.target.closest('.edit-pin-form').id;
  console.error(pinId, 'modify pin pinId');
  const modifiedPin = {
    name: $('#edit-pin-name').val(),
    imageUrl: $('#edit-pin-image').val(),
    boardId: `${selectedBoard}`,
  };
  console.error(modifiedPin, 'modified Pin');
  pinData.updatePin(pinId, modifiedPin)
    .then(() => buildAllBoards())
    .catch((err) => console.error('Modify Pin Broke', err));
};

export default {
  buildAllBoards,
  buildSingleBoardWithPins,
  getCurrentUid,
  printOnlySelectedBoard,
  makeAPin,
  removePin,
  editPinEvent,
  modifyPin,
};
