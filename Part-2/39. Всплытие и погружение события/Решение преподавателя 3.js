//1
function setRandomColor(el) {
    const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
    // Выбираем произвольный цвет из массива
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.background = randomColor;
}

function resetColor(el) {
    el.style.background = '';
}

function onBoxHover(e) {
    // Создаем массив элементов которые будут менять фон.
    let elements = [e.currentTarget];
    let currentEl = e.currentTarget;
    // Проходимся циклом по всем дочерним элементам до самого последнего
    while (currentEl) {
        elements = [...elements, ...currentEl.children];
        currentEl = currentEl.children[currentEl.children.length - 1];
    }
    // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
    elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
}

function onMouseLeave(e) {
    resetColor(e.currentTarget);
}

document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));