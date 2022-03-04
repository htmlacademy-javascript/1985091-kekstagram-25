function getRandomIntInclusive(min, max) {
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
checkLengthComment('str', 'maxlength');

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAME = [
  'Максим',
  'Сергей',
  'Игорь',
  'Виталий',
  'Петр',
  'Михаил'
];
const DESCRIPTION = [
  'Фото из автобуса',
  'Я на море',
  'Вместе идем на работу',
  'Завтра в школу',
  'Выходные в лесу',
  'На рыбалке'
];

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
// eslint-disable-next-line no-unused-vars
const photosMock = Array.from({length: 25}, createPhoto);
