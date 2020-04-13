import utils from '../../helpers/utils';
import pinData from '../../helpers/data/pinData';

const editPinModalForm = (pinId) => {
  pinData.getSinglePin(pinId)
    .then((resp) => {
      const pin = resp.data;
      console.error(pinId);
      let domString = '';
      domString += '<h2 class="text-center">Edit Pin</h2>';
      domString += `<form class="col-10 offset-1 edit-pin-form" id=${pinId}>`;
      domString += '<div class="form-group">';
      domString += '<label for="pin-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-pin-name" value=${pin.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-pin-image">Image Url</label>';
      domString += `<input type="text" class="form-control" id="edit-pin-image" value=${pin.imageUrl}>`;
      domString += '</div>';
      domString += '<div class="form-check">';
      domString += '<h5>Select Board</h5>';
      domString += '<input class="form-check-input" type="radio" name="editBoardRadios" id="editBoardRadios" value="board1">';
      domString += '<label class="form-check-label" for="editBoardRadios">Desserts</div>';
      domString += '<div class="form-check">';
      domString += '<input class="form-check-input" type="radio" name="editBoardRadios" id="editBoardRadios" value="board2">';
      domString += '<label class="form-check-label" for="editBoardRadios">Vegetables</div>';
      domString += '<div class="form-check">';
      domString += '<input class="form-check-input" type="radio" name="editBoardRadios" id="editBoardRadios" value="board3">';
      domString += '<label class="form-check-label" for="editBoardRadios">Cereal</div>';
      domString += '<div class="form-check">';
      domString += '<input class="form-check-input" type="radio" name="editBoardRadios" id="editBoardRadios" value="board4">';
      domString += '<label class="form-check-label" for="editBoardRadios">Cats</div>';
      domString += '<button type="submit" class="btn btn-dark" id="submit-pin-changes">Add Pin</button>';
      domString += '</form>';
      utils.printToDom('editModalForm', domString);
    });
};

export default { editPinModalForm };
