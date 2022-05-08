/*
* Задание 1
*
* Найти параграф и получить его текстовое содержимое (только текст!)
*/

const text = document.querySelector('p').textContent;
console.log(text);


/*
* Задание 2
*
* Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла,
* об имени узла и о количестве дочерних узлов (если детей нет - 0).
*/

const nodeDom = (e) => ({
    nodeType: e.nodeType,
    nodeName: e.nodeName,
    nodeChildren: e.childNodes.length,
});

console.log(nodeDom(document.querySelector('p')));


/*
* Задание 3
*
* Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
*/

const links = document.querySelectorAll('ul a');
const arrLinks = [];

links.forEach((link) => {
    arrLinks.push(link.textContent);
});

console.log(arrLinks);


/*
* Задание 4
*
* В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
*
* -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
*/

const childNodesParagraph = document.querySelector('p').childNodes;

childNodesParagraph.forEach((childNode) => {
    if(childNode.nodeType === 3) {
        childNode.textContent = '-text-';
    }
});

console.log(document.querySelector('p').innerHTML);