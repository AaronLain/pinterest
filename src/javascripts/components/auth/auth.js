import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-primary">Google Login</button>';
  utils.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

const boardButtons = () => {
  let domString = '';
  domString += '<button id="all" class="board-button btn btn-primary">All Boards</button>';
  domString += '<button id="dessert" class="board-button btn btn-danger">Dessert Board</button>';
  domString += '<button id="vegetable" class="board-button btn btn-success">Veggie Board</button>';
  domString += '<button id="cereal" class="board-button btn btn-warning">Cereal Board</button>';

  utils.printToDom('button-row', domString);
};

export default { loginButton, boardButtons };
