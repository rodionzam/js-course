const btn = document.querySelector('.j-btn');
const container = document.querySelector('.j-container');
const modalTitle = document.querySelector('.j-modal-title');
const infoUser = document.querySelector('.j-info-user');
const infoCompany = document.querySelector('.j-info-company');
let responseIdUser;

const tableSchema = {
    id: 'id',
    name: 'Имя',
}

function getUsers(cb) { // 2
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        responseIdUser = response.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, {});
        cb(tableSchema, response); // -> 3
    });

    xhr.addEventListener("error", () => {
        console.log('error');
    });

    xhr.send();
}

function generateThead(tableSchema) { // 5
    const thead = document.createElement('thead');
    const tr = generateTh(tableSchema); // -> 6
    thead.appendChild(tr);
    return thead;
}

function generateTh(tableSchema) { // 6
    const tr = document.createElement('tr');

    Object.values(tableSchema).forEach(val => {
        const th = document.createElement('th');
        th.textContent = val;
        tr.appendChild(th);
    });

    return tr;
}

function generateTd(itemSchema) { // 9 // tableSchema - объект
    const tr = document.createElement('tr');

    Object.entries(itemSchema).forEach(val => { // Получаем массив из массивов ключ значение
        const td = document.createElement('td');
        if (val[0] === 'name') { // Проверяем, если ключ name, то создаём кнопку с data-user-id
            const btn = document.createElement('button');
            btn.classList.add('btn', 'btn-link', 'btn-user', 'p-0');
            btn.textContent = String(val[1]);
            btn.setAttribute('data-user-id', itemSchema.id);
            td.appendChild(btn);
        } else {
            td.textContent = String(val[1]);
        }
        tr.appendChild(td);
    });

    return tr;
}

function generateTbody(tableSchema, response) { // 7
    const tbody = document.createElement('tbody');

    response.forEach(item => { // item - один полный объект из массива
        const itemSchema = generateItemsSchema(tableSchema, item); // -> 8 // Получаем из полного объекта, новый объект с ключами указанными в схеме tableSchema
        const tr = generateTd(itemSchema); // -> 9 // Записываем значения из объекта itemSchema в tr
        tbody.appendChild(tr);
    });

    return tbody;
}

function generateItemsSchema(tableSchema, item) { // 8
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        if (key in item) {
            acc[key] = item[key];
        }

        return acc;
    }, {});

    return itemSchema;
}

function generateTableTemplate() { // 4
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
}

function initTable(tableSchema, response) { // 3
    const table = generateTableTemplate(); // -> 4
    const header = generateThead(tableSchema); // -> 5
    const body = generateTbody(tableSchema, response); // -> 7

    table.appendChild(header);
    table.appendChild(body);

    container.appendChild(table);
}

function generateUserInfo(objUser) {
    infoUser.textContent = '';
    infoUser.insertAdjacentHTML('beforeend', `<li><b>Никнейм</b> ${objUser.username}</li>`);
    infoUser.insertAdjacentHTML('beforeend', `<li><b>Email</b> ${objUser.email}</li>`);
    infoUser.insertAdjacentHTML('beforeend', `<li><b>Адрес</b> ${objUser.address.zipcode}, ${objUser.address.city}, ${objUser.address.suite}, ${objUser.address.street}</li>`);
    infoUser.insertAdjacentHTML('beforeend', `<li><b>Телефон</b> ${objUser.phone}</li>`);
    infoUser.insertAdjacentHTML('beforeend', `<li><b>Сайт</b> ${objUser.website}</li>`);

    infoCompany.textContent = '';
    infoCompany.insertAdjacentHTML('beforeend', `<li><b>Компания</b> ${objUser.company.name}</li>`);
    infoCompany.insertAdjacentHTML('beforeend', `<li><b>Специализация</b> ${objUser.company.catchPhrase}</li>`);
    infoCompany.insertAdjacentHTML('beforeend', `<li><b>Стратегия</b> ${objUser.company.bs}</li>`);
}

function showUserInfo({target}) {
    if (target.classList.contains('btn-user')) {
        const userId = target.dataset.userId;
        const objUser = responseIdUser[userId];
        modalTitle.textContent = objUser.name;
        generateUserInfo(objUser);
        $('#myModal').modal('show');
    }
}

btn.addEventListener('click', e => { // 1
    getUsers(initTable); // -> 2 (3)
});

container.addEventListener('click', showUserInfo);
