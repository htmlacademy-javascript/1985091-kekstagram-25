/* eslint-disable no-unused-vars */
import {MESSAGE, NAME, DESCRIPTION} from './main.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();

const userId = Array.from({length: 25}, (v, i) => ++i);
const userUrl = Array.from({length: 25}, (v, i) => ++i);
const commentsId = Array.from({length: 1000}, (v, i) => ++i);

const getUniqueNumber = (array) => array.splice(getRandomIntInclusive(0, (array.length - 1)), 1);

const createCommetsObject = () => ({
  id: getUniqueNumber(commentsId)[0],
  avatar: `img/-${getRandomIntInclusive(1, 6)}.svg`,
  message: MESSAGE[getRandomIntInclusive(0, MESSAGE.length - 1)],
  name: NAME[getRandomIntInclusive(0, NAME.length - 1)]
});

const createPhoto = () => ({
  id: getUniqueNumber(userId)[0],
  url: `photos/${getUniqueNumber(userUrl)}.png`,
  likes: getRandomIntInclusive(15, 200),
  description: DESCRIPTION[getRandomIntInclusive(0, DESCRIPTION.length - 1)],
  comments: Array.from({length: getRandomIntInclusive(1, 10)}, createCommetsObject)
});
const photosMock = Array.from({length: 25}, createPhoto);

