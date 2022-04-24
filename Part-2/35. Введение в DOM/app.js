const div = document.querySelector('div');
console.dir(div);

const titles = document.querySelectorAll('h1'); // Псевдомассив, коллекция, объект - минус в том что мы не можем работать с данной коллекцией как с массивом
console.dir(titles); // NodeList(2) - NodeList это не живые коллекции, которые сохраняются при загрузке страницы и при изменении dom элемента они останутся как были загружены

// Способы получить коллекцию в виде массива
console.log(Array.from(titles));
console.log(Array.prototype.slice.call(titles));
console.log([...titles]);

const h1 = document.getElementsByTagName('h1');
console.log(h1); // HTMLCollection(2) [h1, h1] - HTMLCollection это живые коллекции, которые поменяются если изменится dom элемент

// Пример свойств
console.log(div.nextSibling); // Вернёт следующий узел после дива - #text
console.log(div.nextElementSibling); // Вернёт следующий элемент после дива - <script src="app.js"></script>
console.log(div.firstChild); // Первый дочерний узел - Lorem ipsum
console.log(div.firstElementChild); // Первый дочерний элемент - <a href="" class="link">dolor</a>
console.log(document.body.firstChild.nextSibling); // <!-- my comment -->

console.log(document.body); // Получим тело нашего документа
console.log(document.links); // Получим все ссылки в нашем документе
console.log(document.forms); // Получим все формы в нашем документе

// Объектная модель браузера
console.log(window);
console.log(navigator);
console.log(location);