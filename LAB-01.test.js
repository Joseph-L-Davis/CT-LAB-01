import copyAndPush from './copyAndPush';
import getName from './getName';

describe('return name value of given object', () => {

  it('return name value of given object', () => {

    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });
});

describe('return new array with original array and added item to the end', () => {

  it('return new array with original array and added item to the end', () => {

    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
