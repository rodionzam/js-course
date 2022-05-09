//1
const btn = document.getElementById('btn-msg');
btn.addEventListener('click', (e) => {
    //   alert(e.target.dataset.text);
    // или если элемент один можно обратится к нему
    //   alert(btn.dataset.text);
    // так же внутри обработчика события через this мы имеем доступ к элементу на который повешено событие
    //   alert(this.dataset.text);
    // или через currentTarget
    alert(e.currentTarget.dataset.text);
});


//2
const btn = document.getElementById('btn-msg');
// У событий mouseover и mouseout есть аналоги mouseenter/mouseleave
btn.addEventListener('mouseover', (e) => {
    btn.classList.add('bg-red');
});
btn.addEventListener('mouseout', (e) => {
    btn.classList.remove('bg-red');
});


//3
const tagTextContainer = document.getElementById('tag');
document.body.addEventListener('click', (e) => {
    tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
});


//4
const generateBtn = document.getElementById('btn-generate');
const list = document.querySelector('ul');

function generateNewItem(e) {
    // получаем текущее количество элементов в списке
    const num = list.children.length + 1;
    const text = `Item ${num}`;
    const li = document.createElement('li');
    li.textContent = text;

    list.appendChild(li);
}

generateBtn.addEventListener('click', generateNewItem);