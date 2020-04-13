const pinMaker = (pin) => {
  let domString = '';
  domString += `<div class="card col-3" id="${pin.id}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title text-center">${pin.name}</h5>`;
  domString += `<img src=${pin.imageUrl} class="img-fluid"/>`;
  domString += '<div class="card-button-container d-flex flex-row justify-content-between">';
  domString += '<button class="btn btn-danger delete-pin d-flex justify-content-center">X</button>';
  domString += '<a class="btn btn-success edit-pin" data-toggle="collapse" href="#editModalCollapse" role="button" aria-expanded="false" aria-controls="editModalCollapse">';
  domString += 'Edit Pin';
  domString += '</a>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinMaker };
