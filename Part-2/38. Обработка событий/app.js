const btn = document.querySelector('button');
const link = document.querySelector('a');

btn.onclick = function () { // Данное событие не сработает, т.к. внизу повторно используется onclick
    console.log('click');
};

btn.onclick = function () { // onclick плох тем, что при повторном использовании, будет срабатывать только последнее событие onclick
    console.log('click2');
};

// Для того чтобы можно было повторно использовать событие, используем addEventListener
btn.addEventListener('click', function () {
    console.log('click3');
});

btn.addEventListener('click', function () {
    console.log('click4');
});

// btn.addEventListener('click', function (e) {
//     console.log(this); // button
//     console.log(e);
// });

btn.addEventListener('click', e => { // Пример стрелочной функции, переписали функцию выше
    console.log(this); // window - this в стрелочной функции будет указывать на window
    console.log(e);
});

function clickHandler(e) {
    e.preventDefault(); // Отменяем дефолтное действие ссылки (отменили перезагрузку страницы при клике на ссылку)
    console.log('click link');
}

link.addEventListener('click', clickHandler);

// link.removeEventListener('click', clickHandler); // removeEventListener - удаляем событие на ссылку

const container = document.querySelector('.container');

btn.addEventListener('click', e => {
    const div = document.createElement('div');
    const nestedBtn = document.createElement('button')
    div.textContent = Math.random();
    nestedBtn.textContent = 'button';
    div.appendChild(nestedBtn);
    container.appendChild(div);
});

container.addEventListener('click', e => {
    console.dir(e.target);

    if (e.target.tagName === 'BUTTON') {
        console.log('button clicked');
    }
});