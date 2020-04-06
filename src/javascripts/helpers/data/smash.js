import boardData from './boardData';
import boardPinData from './boardPinData';
import pinData from './pinData';

const getBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;
      board.id = boardId;
      board.pins = [];
      boardPinData.getBoardPinByBoardId(boardId).then((boardPins) => {
        const pinDatas = pinData.getPins();
        pinDatas.then((allPins) => {
          boardPins.forEach((boardPin) => {
            const pin = allPins.find((x) => x.id === boardPin.pinId);
            board.pins.push(pin);
          });
          resolve(board);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getBoardWithPins };
