export default (arr) => {
  for(let i = 0; i < arr.length ; i ++) {
    arr[i] = arr[i].toUpperCase(); 
    if(arr[i][0] === 'F') {
      arr[i][0] === '';
    } 
  }
  return arr;
};
