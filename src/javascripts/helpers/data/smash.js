import boardData from './boardData';
import boardPinData from './boardPinData';
import pinData from './pinData';

const getBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;
      console.error(board, 'board GetBoardWithPins');
      board.id = boardId;
      board.pins = [];
      boardPinData.getBoardPinByBoardId(boardId).then((boardPins) => {
        const pinDatas = pinData.getPins();
        console.error(pinDatas);
        pinDatas.then((allPins) => {
          console.error(allPins, 'all Pins');
          boardPins.forEach((boardPin) => {
            const pin = allPins.find((x) => x.id === boardPin.pinId);
            board.pins.push(pin);
            console.error('response smash boardPins ForEach');
          });
          resolve(board);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getBoardWithPins };
