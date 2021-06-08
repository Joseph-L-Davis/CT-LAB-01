export default (arr) => {
  const fOutArr = [];
  for(let i = 0; i < arr.length ; i ++) {
    arr[i] = arr[i].toUpperCase();
    if(arr[i][0] !== 'F') {
      fOutArr.push(arr[i]);
    } 
  }
  return fOutArr;
};
