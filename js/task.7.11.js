const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
//демо 8.7
function openPhoto ({url, likes, comments, description}, container) {
  container.classList.remove('hidden');
  container.querySelector('.big-picture__img img').src = url;
  container.querySelector('.likes-count').textContent = likes;
  container.querySelector('.comments-count').textContent = comments.length;
  container.querySelector('.social__caption').textContent = description;

  const commentContainer = /* ??? */.querySelector('.social__comments');
  renderCommentList(comments, commentContainer);//подключить модуль с comments

  container.querySelector('.social__comment-count').classList.add('hidden');//п3. прячем блоки счетчика комитов
  container.querySelector('.comments-loader').classList.add('hidden');//п.3 прячем блоки загрузки новых комитов

  document.querySelector('body').classList.add('modal-open');//п.4  чтобы не было прокрутки

}
