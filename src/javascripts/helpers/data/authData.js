import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const boardDiv = $('#board');
const userPinsDiv = $('#userPins');
const logoutButton = $('#logout-button');

const checkLoginStatus = () => {
  firebase.auth.onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      userPinsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      userPinsDiv.addClass('hide');
      logoutButton.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
