//1
const dropdownItems = document.querySelectorAll('.dropdown-item');
// В данной переменной мы будем хранить текущее открытое меню
let currentOpenedMenu = null;

function toggleDropdownMenu(e) {
    // получаем блок меню внутри .dropdown-item
    const menu = e.currentTarget.querySelector('.dropdown-menu');
    // метод toggle возвращает булевое значение, если клас удален то вернет false а если добавлен то true. Это значение мы сохраняем в переменную
    const isAdded = menu.classList.toggle('d-none');
    // если в currentOpenedMenu уже есть блок и он не равен текущем menu то мы его скрываем
    if (currentOpenedMenu && currentOpenedMenu !== menu) {
        currentOpenedMenu.classList.add('d-none');
    }
    // Если класс d-none был удален то значет меню видимо и мы его сохраняем в переменную currentOpenedMenu
    if (!isAdded) {
        currentOpenedMenu = menu;
    }
}

dropdownItems.forEach(d => d.addEventListener('click', toggleDropdownMenu));