'use strict'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();


let str;
let maxlength;

function checkLengthComment(str, maxlength) {
  if (str.length <= maxlength) {
    return true;
  }
  return false;
}
checkLengthComment();
