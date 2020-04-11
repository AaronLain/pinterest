import boardData from './boardData';
import pinData from './pinData';

const getBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;
      board.id = boardId;
      board.pins = [];
      pinData.getPins(boardId).then((allPins) => {
        board.pins = allPins;
        resolve(board);
      });
    })
    .catch((err) => reject(err));
});

export default { getBoardWithPins };
