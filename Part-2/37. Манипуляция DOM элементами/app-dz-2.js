/*
* Задание 1
*
* Найти в коде список ul и добавить класс “list”
*/

document.querySelector('ul').classList.add('list');


/*
* Задание 2
*
* Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
*/

document.querySelector('ul ~ a').setAttribute('id', 'link');


/*
* Задание 3
*
* На li через один (начиная с самого первого) установить класс “item”
*/

const list = document.querySelectorAll('ul li');

list.forEach((item, i) => {
    if (i % 2 === 0) {
        item.classList.add('item');
    }
});


/*
* Задание 4
*
* На все ссылки в примере установить класс “custom-link”
*/

const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.classList.add('custom-link');
});