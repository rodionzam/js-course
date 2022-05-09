const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
    e.stopPropagation(); // С помощью stopPropagation отключаем всплытие событий для оберток wrap и body
    console.log('click btn');
});

// Всплытие событий

wrap.addEventListener('click', e => {
    console.log('click wrap');
});

document.body.addEventListener('click', e => {
    console.log('click body');
});

// Погружение событий - оно срабатывает раньше всплытия, чтобы его увидеть, добавляем третим параметром в addEventListener true
// Чтобы работало всплытие и погружение, нужно продублировать эти же обработчики addEventListener, но с параметром true

wrap.addEventListener('click', e => {
    console.log('click wrap');
}, {capture: true}); // или просто true без объекта - перехватываем погружение события

document.body.addEventListener('click', e => {
    console.log('click body');
}, true);