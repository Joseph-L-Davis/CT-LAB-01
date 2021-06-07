import getName from './getName';

describe('return name value of given object', () => {

  it('return name value of given object', () => {

    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });
});
