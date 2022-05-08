const div = document.querySelector('div');

const title = document.querySelector('h1');
title.innerHTML = '<span>text</span>';
title.textContent = '<span>new text</span>';
// title.appendChild('<span>appen</span>');
title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');

title.innerHTML += '<span>new text</span>';
const span = title.querySelector('span');
console.log(span);
title.innerHTML += '<span>new text2</span>';
span.textContent = 'asdasd'; // Ничего не произойдёт
// Опасно использовать innerHTML, т.к. он удаляет ссылки на элементы и мы потеряли связь со своим спаном
// Лучше всего для добавления или удаления элементов на странице, использовать методы, которые работают с DOM узлами, например appendChild, insertAdjacentHTML и т.д.


// Создание элемента
const span2 = document.createElement('span'); // Элемент ещё не добавляется на страницу, создаётся внутри js
span2.textContent = 'span created by createElement';
span2.classList.add('meClass');
console.log(span2); // <span class="meClass">span created by createElement</span>

title.appendChild(span2); // Добавляем span на страницу
// div.appendChild(span2); // span пропадёт из заголовка и появится в диве, потому что дом узлы могут быть только в одном экземпляре


// Создание группы элементов
const fragment = document.createDocumentFragment();
const colors = ['red', 'yellow', 'orange'];
colors.forEach((color) => {
    const item = document.createElement('div');
    item.classList.add(`bg-${color}`);
    item.style.background = color;
    item.textContent = color;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);


// Удаление элементов со страницы
title.remove(); // Удаляем заголовок - remove данный метод не поддерживается в ie11, но его можно сполифилить, об этом в следующих уроках
// title.parentElement.removeChild(title); // Старый способ удаления элементов, который будет работать в ie11