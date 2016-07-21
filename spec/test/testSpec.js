'use strict';

const main = require('../../main/main');

describe('oddSum', () => {
  let numbers;
  let odds;
  let squares;

  beforeEach(() => {
    numbers = [1,2,3,4,5];
    odds = [1,3,5];
    squares = [1,9,25];
  });
  it('buildOdds', () => {
    const expectOdds = [1,3,5];
    expect(main.buildOdds(numbers)).toEqual(expectOdds);
  });

  it('buildSquares', () => {
    const expectSquares = [1,9,25];

    expect(main.buildSquares(odds)).toEqual(expectSquares);
  });

  it('buildOddsSum', () => {
    const expectOddsSum = 35;

    expect(main.buildOddsSum(squares)).toEqual(expectOddsSum);
  });

  it('printOddsSum', () => {
    spyOn(console, 'log');

    main.printOddsSum(numbers);

    const expectOddsSum = 35;

    expect(console.log).toHaveBeenCalledWith(expectOddsSum);
  });
});
