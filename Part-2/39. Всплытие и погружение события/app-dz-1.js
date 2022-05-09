/*
* Задание 1
*
* По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
*/

const btnMsg = document.querySelector('#btn-msg');

btnMsg.addEventListener('click', function (e) {
    alert(this.dataset.text);
});


/*
* Задание 2
*
* При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета.
* Цвет менять можно через добавление класса.
*/

// const btnMsg = document.querySelector('#btn-msg');

btnMsg.addEventListener('mouseover', function (e) {
    this.style.background = 'red';
});

btnMsg.addEventListener('mouseout', function (e) {
    this.style.background = '';
});


/*
* Задание 3
*
* При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
*/

const tag = document.querySelector('#tag');

document.addEventListener('click', e => {
    tag.textContent = `Tag: ${e.target.tagName}`;
});


/*
* Задание 4
*
* При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
*/

const ul = document.querySelector('ul');
const btnGenerate = document.querySelector('#btn-generate');

btnGenerate.addEventListener('click', e => {
    const lengthLi = document.querySelectorAll('ul li').length;
    const li = document.createElement('li');
    li.textContent = `Item ${lengthLi + 1}`;
    ul.appendChild(li);
});