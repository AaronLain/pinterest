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
  domString += '<label for="pin-type">Type</label>';
  domString += '<input type="text" class="form-control" id="pin-type" placeholder="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="pin-image">Image Url</label>';
  domString += '<input type="text" class="form-control" id="pin-image" placeholder="">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="pin-creator">Add Pin</button>';
  domString += '</form>';

  utils.printToDom('form-container', domString);
};

export default { newPinForm };
