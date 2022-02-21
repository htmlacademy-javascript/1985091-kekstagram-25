function getRandomIntInclusive(min, max) { // первая ф-ия
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();
function checkLengthComment(str, maxlength) {
  return str.length <= maxlength;
}      
checkLengthComment();