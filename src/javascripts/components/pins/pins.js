const pinMaker = (pin) => {
  let domString = '';
  domString += `<div class="card col-3" id="${pin.id}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title text-center">${pin.name}</h5>`;
  domString += `<img src=${pin.imageUrl} class="img-fluid"/>`;
  domString += '<button class="btn btn-danger delete-pin text-center">X</button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinMaker };
