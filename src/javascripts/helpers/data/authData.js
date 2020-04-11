import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const boardDiv = $('#board');
const userPinsDiv = $('#userPins');
const addPinButton = $('.add-button');
const logoutButton = $('#logout-button');

const hideBoardDivs = () => {
  $('#board1').addClass('hide');
  $('#board2').addClass('hide');
  $('#board3').addClass('hide');
  $('#board4').addClass('hide');
};

const showBoardDivs = () => {
  $('#board1').removeClass('hide');
  $('#board2').removeClass('hide');
  $('#board3').removeClass('hide');
  $('#board4').removeClass('hide');
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      addPinButton.removeClass('hide');
      userPinsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      showBoardDivs();
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      addPinButton.addClass('hide');
      userPinsDiv.addClass('hide');
      logoutButton.addClass('hide');
      hideBoardDivs();
    }
  });
};

export default { checkLoginStatus };
