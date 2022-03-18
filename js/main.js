import {photosMock} from './data.js';
photosMock();

const template = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();

function render() {
  photosMock.forEach((postObj) => {
    const element = template.cloneNode(true);
    const picture = element.querySelector('.picture__img');
    picture.setAttribute('src', postObj.url);

    element.querySelector('.picture__likes').textContent = postObj.likes;
    element.querySelector('.picture__comments').textContent = postObj.comments.length;

    fragment.appendChild(element);
  });
}
render();
