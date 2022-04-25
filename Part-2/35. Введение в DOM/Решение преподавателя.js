/*
* Задание 1
*
* Дана разметка.
*
* <!doctype html>
* <html lang="en">
* <head>
*     <meta charset="UTF-8">
*     <meta name="viewport" content="width=device-width, initial-scale=1.0">
*     <title>Document</title>
* </head>
* <body>
*     <div>
*         <p>Text</p>
*         <p>Other</p>
*         <p>Next</p>
*         <p>Last</p>
*     </div>
*     <div></div>
*     <div></div>
*
*     <script src="app-dz.js"></script>
* </body>
* </html>
*
* Зная структуру html, с помощью изученных методов получить (в консоль):
*
* 1. head
* 2. body
* 3. все дочерние элементы body и вывести их в консоль.
* 4. первый div и все его дочерние узлы
* а) вывести все дочерние узлы в консоль
* б) вывести в консоль все дочерние узлы, кроме первого и последнего
*
* Для навигации по DOM использовать методы, которые возвращают только элементы
*/

//1
console.log(document.head);
//2
console.log(document.body);
//3
console.log(document.body.children);
//4.а
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);
// 4.б
const div = document.body.firstElementChild;
// При помощи оператора ... мы получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div.
const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.log(filteredArticles);

/*
* Задание 2
*
* Дана разметка.
*
* <!doctype html>
* <html lang="en">
* <head>
*     <meta charset="UTF-8">
*     <meta name="viewport"
*           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
*     <meta http-equiv="X-UA-Compatible" content="ie=edge">
*     <title>Hello world</title>
* </head>
* <body>
*     <div>
*         <article>
*             <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
*         </article>
*     </div>
*     <ul>
*         <li><a href="#">Link1</a></li>
*         <li><a href="#">Link2</a></li>
*         <li><a href="#">Link3</a></li>
*         <li><a href="#">Link4</a></li>
*     </ul>
*     <span></span>
*     <a href="#">Some link</a>
*
*     <script src="app-dz.js"></script>
* </body>
* </html>
*
* Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
*
* isParent(parent, child);
*
* isParent(document.body.children[0], document.querySelector('mark'));
* // true так как первый див является родительским элементом для mark
*
* isParent(document.querySelector('ul'), document.querySelector('mark'));
* // false так ul НЕ является родительским элементом для mark
*
* Функция принимает только DOM объекты. Обязательно проверяйте это.
*/

function isParent(parent, child) {
    // Проверяем что переданные элементы являются HTML элементами
    if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

    let isParent = false;
    let currentParent = child.parentElement;

    while(currentParent) {
        isParent = currentParent === parent
        if (isParent) {
            break;
        }

        currentParent = currentParent.parentElement;
    }

    return isParent;
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

/*
* Задание 3
*
* Используя разметку из предыдущего задания.
*
* Получить список всех ссылок, которые не находятся внутри списка ul.
*/

const filteredLinks = [...document.links].filter(a => !a.closest('ul'));
console.log(filteredLinks);

/*
* Задание 4
*
* Используя разметку из предыдущего задания.
*
* Найти элемент, который находится перед и после списка ul.
*/

const ul = document.querySelector('ul');
const prev = ul.previousElementSibling;
const next = ul.nextElementSibling;