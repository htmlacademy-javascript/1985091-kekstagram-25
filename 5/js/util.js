function checkLengthComment(str, maxlength) {
  return str.length <= maxlength;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {checkLengthComment, getRandomIntInclusive};
