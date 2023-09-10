function checkForBingo(bingoCard, drawnNumbers) {
  const filledCard = [...bingoCard];
  filledCard[12] = 'FREE';
  const winPattern = [
    [0, 1, 2, 3, 4],          // Rows

    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    [0, 5, 10, 15, 20],      // Columns

    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    [0, 6, 12, 18, 24],      // Diagonals
    [4, 8, 12, 16, 20],
  ];
  for (const pattern of winPattern) {
    const isWin = pattern.every(index => {
      const number = filledCard[index];
      return number === 'FREE' || drawnNumbers.includes(number);
    });
    if (isWin) {
      return true;
    }
  }
  return false;
}
module.exports = checkForBingo;
