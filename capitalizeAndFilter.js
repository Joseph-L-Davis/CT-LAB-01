export default (arr) => {
  const upperCaseArr = arr.map(item => item.toUpperCase());
  const fOutStrings = upperCaseArr.filter(item => item[0] !== 'F');
  return fOutStrings;
};

