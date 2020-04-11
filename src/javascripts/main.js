import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import navBar from './components/navBar';
import board from './components/board/board';
import newPin from './components/newPin/newPin';

import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  navBar.logoutEvent();
  board.buildAllBoards();
  $('.add-button').click(newPin.newPinForm);
  $('body').on('click', '#pin-creator', board.makeAPin);
  $('body').on('click', '.delete-pin', board.removePin);
};

init();
