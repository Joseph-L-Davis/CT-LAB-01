export default (arr) => {
  for(let i = 0; i < arr.length ; i ++) {
    arr[i] = arr[i].toUpperCase();
    for(let j = 0; j < arr.length; j ++)
      if(arr[j][0] === 'F') {
        arr[j][0] === '';
      }
  }
  return arr;
};
