'use strict';

function printOddsSum(numbers) {
  const odds = buildOdds(numbers);
  const squares = buildSquares(odds);

  console.log(buildOddsSum(squares));
}

function buildOdds(numbers) {
  return numbers.filter(number => number % 2=== 1);
}

function buildSquares(odds) {
  return odds.map((odd) => {
    return odd * odd;
  });
}

function buildOddsSum(squares) {
  return squares.reduce((prv, next) => {
    return prv + next;
  }, 0);
}

module.exports = {
  buildOdds: buildOdds,
  buildSquares: buildSquares,
  buildOddsSum: buildOddsSum,
  printOddsSum: printOddsSum
}
