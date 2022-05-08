//1
const list = document.querySelector('ul');
// Текущее количество элементов в списке
const currentCounts = list.children.length;
// Количество новых элементов
const newLiCounts = 3;

for (let i = 0; i < newLiCounts; i++) {
    let li = document.createElement('li');
    li.classList.add('new-item');
    li.textContent = `item ${currentCounts + i + 1}`;
    list.appendChild(li);
}

//2
const [...links] = document.querySelectorAll('ul a');
links.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));

//3
const img = document.createElement('img');
img.setAttribute('src', 'https://via.placeholder.com/150/92c952');
img.setAttribute('alt', 'some image');
document.body.insertAdjacentElement('afterbegin', img);

//4
const mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

//5
const list = document.querySelector('ul');
// Сортируем массив элементов по текстовому содержимому
const listItems = [...list.children].sort((prev, next) => {
    return prev.textContent > next.textContent ? -1 : 1;
});
// Очищаем текущее содержимое списка
list.innerHTML = '';
// Генерируем новое содержимое из отсортированного массива элементов
listItems.forEach((item) => list.appendChild(item));