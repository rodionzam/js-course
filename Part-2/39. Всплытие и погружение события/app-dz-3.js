/*
* Задание 1
*
* 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка.
* ВАЖНО, только дочерние относительно блока на который навели мышь.
* Вот массив (список) рандомных цветов
* ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
*
* 2. Возращаете фон обратно когда пользователь уводит мышку с блока.
*
* 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего.
* Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.
*/

const [...box] = document.querySelectorAll('.box');

function addColor(el) {
    const arrColors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
    el.style.background = arrColors[Math.floor(Math.random() * arrColors.length)];
}

function removeColor(el) {
    el.style.background = '';
}

function onMouseOver(e, i, arr) {
    e.stopPropagation();

    for (i; i < arr.length; i++) {
        setTimeout(addColor, 200 * (i + 1), arr[i]);
    }
}

function onMouseOut(e, arr) {
    e.stopPropagation();

    for (let i = 0; i < arr.length; i++) {
        removeColor(arr[i]);
    }
}

box.forEach((item, i, arr) => {
    item.addEventListener('mouseover', e => {
        onMouseOver(e, i, arr);
    });
    item.addEventListener('mouseout', e => {
        onMouseOut(e, arr);
    });
});