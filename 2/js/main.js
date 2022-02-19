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


const STR;
const MAX_LENGTH;

function checkLengthComment(STR, MAX_LENGTH) {
  if (STR.length <= MAX_LENGTH) {
    return true;
  }
  return false;
}
checkLengthComment();
