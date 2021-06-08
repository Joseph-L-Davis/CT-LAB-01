import capitalizeAndFilter from './capitalizeAndFilter';
import copyAndPush from './copyAndPush';
import fetchQuotes from './fetchQuotes';
import getName from './getName';

describe('return name value of given object', () => {

  it.skip('return name value of given object', () => {

    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });
});

describe('return new array with original array and added item to the end', () => {

  it.skip('return new array with original array and added item to the end', () => {

    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });

  it.skip('return original array to make sure its unchanged', () => {

    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});


describe('capitalize all strings, filter out strings that start with f/F', () => {

  it.skip('capitalize all strings, filter out strings that start with f/F', () => {

    const strings = ['letter', 'filter', 'pajama', 'focus'];
    expect(capitalizeAndFilter(strings)).toEqual(['LETTER', 'ILTER', 'PAJAMA', 'OCUS']);
  });
});

describe('return futurama quote', () => {

  it('return futurama quote', async () => {
    
    expect(await fetchQuotes()).toEqual(expect.objectContaining({
      'name': 'Bender',
      'text': 'Bite my shiny metal ass.',
      'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    }));
  });
});
