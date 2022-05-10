/*
* Задание 1
*
* Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu
* который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
* При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.
*/

const [...dropItem] = document.querySelectorAll('.dropdown-item');

dropItem.forEach(itemDrop => {
    itemDrop.addEventListener('click', e => {
        itemDrop.querySelector('.dropdown-menu').classList.toggle('d-none');

        dropItem.forEach(itemHide => {
            if (itemDrop !== itemHide) {
                itemHide.querySelector('.dropdown-menu').classList.add('d-none');
            }
        });
    });
});