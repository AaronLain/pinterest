import firebase from 'firebase/app';
import 'firebase/auth';
import buttons from '../../components/auth/auth';

const authDiv = $('#auth');
const boardDiv = $('#board');
const userPinsDiv = $('#userPins');
const btnRowDiv = $('#button-row');
const logoutButton = $('#logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      userPinsDiv.removeClass('hide');
      btnRowDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      buttons.boardButtons();
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      userPinsDiv.addClass('hide');
      btnRowDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
