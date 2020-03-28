const pinMaker = (pin) => {
  let domString = '';
  domString += `<div class="card col-3" id="${pin.id}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${pin.name}</h5>`;
  domString += `<img src=${pin.imageUrl} class="img-fluid"/>`;
  domString += '<button class="btn btn-danger delete-cow">Baleted</button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinMaker };
