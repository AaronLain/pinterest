import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
    $('#button-row').empty();
  });
};

export default { logoutEvent };
