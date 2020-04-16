import utils from '../../helpers/utils';

const newPinForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Pin</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="pin-name">Name</label>';
  domString += '<input type="text" class="form-control" id="pin-name" placeholder="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="pin-image">Image Url</label>';
  domString += '<input type="text" class="form-control" id="pin-image" placeholder="">';
  domString += '</div>';
  domString += '<div class="form-check">';
  domString += '<h5>Select Board</h5>';
  domString += '<input class="form-check-input" type="radio" name="boardRadios" id="boardRadios" value="board1">';
  domString += '<label class="form-check-label" for="boardRadios">Desserts</div>';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="boardRadios" id="boardRadios" value="board2">';
  domString += '<label class="form-check-label" for="boardRadios">Vegetables</div>';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="boardRadios" id="boardRadios" value="board3">';
  domString += '<label class="form-check-label" for="boardRadios">Cereal</div>';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="boardRadios" id="boardRadios" value="board4">';
  domString += '<label class="form-check-label" for="boardRadios">Cats</div>';
  domString += '<button type="submit" class="btn btn-dark" id="pin-creator">Add Pin</button>';
  domString += '</form>';

  utils.printToDom('form-container', domString);
};

export default { newPinForm };
