/*
* Задание 1
*
* Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
*
* <ul>
*   <li><a href="#">Link1</a></li>
*   ...
*   <li class=”new-item”>item 5</li>
*   <li class=”new-item”>item 6</li>
* </ul>
*
* Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
*/

const ul = document.querySelector('ul');
const lengthLi = document.querySelectorAll('ul li').length;
const newLi = document.createDocumentFragment();
const countNewLi = 5;

for (let i = lengthLi; i < lengthLi + countNewLi; i++) {
    const li = document.createElement('li');
    li.classList.add('new-item');
    li.textContent = `item ${i + 1}`;
    newLi.appendChild(li);
}

ul.appendChild(newLi);


/*
* Задание 2
*
* В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
*/

const links = document.querySelectorAll('ul a');

links.forEach((link) => {
    link.insertAdjacentHTML('beforeend', '<strong></strong>');
});


/*
* Задание 3
*
* В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
* В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
*/

const image = document.createElement('img');
image.src = 'https://i.pinimg.com/originals/48/4e/1d/484e1d58121facb5a1b07bb7a5daa725.jpg';
image.alt = 'Корги';
image.width = 250;

document.body.prepend(image);


/*
* Задание 4
*
* Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
*/

const mark = document.querySelector('mark');
mark.textContent += 'green';
mark.classList.add('green');


/*
* Задание 5
*
* Отсортировать li внутри списка в обратном порядке (по тексту внутри)
*/

const list = document.querySelector('ul');
const [...listItems] = document.querySelectorAll('ul li');

for (let i = 0; i < listItems.length; i++) {
    list.prepend(listItems[i]);
}
