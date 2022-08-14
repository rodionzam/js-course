// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err));

function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post))
            .catch(err => reject(err));
    });
}

getPost(1)
    .then(post => console.log(post));

// Упрощаем запись, но есть нюанс, если мы будем выполнять какие либо действия перед return (тут ***), и там будет ошибка, мы не сможем её обработать

function getPost2(id) {
    // ***
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        response => response.json(),
    );
}

getPost2(1)
    .then(post => console.log(post))
    .catch(err => console.log(err));

// Третий вариант, с возможностью обработать ошибку

function getPost3(id) {
    return Promise.resolve().then(() => {
        const [userType, userId] = id.split('-');
        return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
            response => response.json(),
        );
    });
}

getPost3('user-1')
    .then(post => console.log(post))
    .catch(err => console.log(err));