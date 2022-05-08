const div = document.querySelector('div');

const link = div.querySelector('.link');
console.log(link.parentElement); // parentElement - возвращает прямого родителя
console.log(link.closest('.content')); // closest - возвращает ближайшего родителя с указанным селектором

// Работа с классами
console.log(div.classList);
div.classList.add('article', 'custom'); // Добавляем два новых класса
div.classList.remove('article'); // Удаляем класс article
console.log(div.classList.contains('custom')); // true - метод проверяет наличие класса
console.log(div.classList.toggle('toggle')); // true - метод добавляет или удаляет класс
console.log(div.className); // content custom toggle - список классов элемента

// Работа с атрибутами
console.log(link.href);

div.setAttribute('id', 'myId'); // Добавляем атрибут id со значением
console.log(div.id);
div.id = 'myId2'; // Меняем значение атрибута
console.log(div.getAttribute('id')); // myId2 - получили значение атрибута
console.log(div.hasAttribute('id')); // true - проверка наличия атрибута
div.removeAttribute('id'); // Удаляем атрибут

// Работа с кастомными атрибутами
console.log(div.dataset.myattr); // myCustom value - получаем значение своего атрибута
div.dataset.myattr = 'my attr'; // Перезаписали значение атрибута
console.log(div.getAttribute('data-myattr')); // my attr - получаем занчение через getAttribute, обязательно пишем полное название вместе с data