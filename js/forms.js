/* 4.Изучите, что значит загрузка изображения, и как, когда и каким образом показывается форма редактирования изображения. Напишите код и добавьте необходимые обработчики для реализации этого пункта техзадания. В работе вы можете опираться на код показа окна с полноразмерной фотографией, который вы, возможно, уже написали в предыдущей домашней работе.
Подстановка выбранного изображения в форму — это отдельная домашняя работа. В данном задании этот пункт реализовывать не нужно.
5. После реализуйте закрытие формы.
Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания. Значение других полей формы также нужно сбрасывать.
*/

const body = document.querySelector('body');
const uploadFileForm = document.querySelector('#upload-file');
const imgEditorForm = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');//п 1.3 ТЗ закрытие изображения
const isEscapeKey = (evt) => evt.key === 'Escape';//п1.3 ТЗ закрытие изображения

const openLoadForm = () => {
  imgEditorForm.classList.remove('hidden');//удаляем класс 'hidden' у эл-та '.img-upload__overlay' для окрытия формы
  body.classList.add('modal-open');//задаём класс 'modal-open' у body
  uploadCancelBtn.addEventListener('click', () => {//вешаем обработчик на клик по кнопке (65 стр в html)
    imgEditorForm.classList.add('hidden');//добавляем класс 'hidden' у эл-та '.img-upload__overlay' для закрытия формы
    body.classList.remove('modal-open');//удаляем класс 'modal-open' для закрытия
    uploadFileForm.value = '';//сбрасываем значение поля выбора файла #upload-file
  });

  document.addEventListener('keydown', (evt) => {//вешаем обработчик на клавиатуру для клавиши Esc
    if (isEscapeKey(evt)) {
      evt.preventDefault();// сбрасываем отправку по умолчанию
      imgEditorForm.classList.add('hidden');
      body.classList.remove('modal-open');
      uploadFileForm.value = '';//сбрасываем значение поля выбора файла #upload-file
    }
  });
};

uploadFileForm.addEventListener('change', openLoadForm);


/* выполняю п.6 и п.7 задания 8.13*/
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  const re = /^#[A-Za-zА-Яа-яЁ0-9]{1,19}$/;
  const hashTag = document.querySelector('.text__hashtags').value;//возвращаем хэш-тег
  const arrHashtags = hashTag.split(' ');//разбиваем строку на массивы, разделённые пробелом, который передан в аргументе
  const result = arrHashtags.every((elem) => re.test(elem));//сравниваем на соответствие требованиям в рег.выражении
  if (result === false || hashTag.length > 5 || ) {//сравниваем на все требования ТЗ
    return 'error';
  } else if {
    (hashTag)
  }

  }
});
