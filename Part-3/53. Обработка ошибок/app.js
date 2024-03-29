const btn = document.querySelector('.btn-get-post');
const btnAddPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.j-container-posts');

function getPost(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.addEventListener("error", () => {
        console.log('error');
    });

    xhr.send();
}

function createPost(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    xhr.addEventListener("error", () => {
        console.log('error');
    });

    xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    return card;
}

function renderPosts(response) {
    const fragment = document.createDocumentFragment();

    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

btn.addEventListener('click', e => {
    getPost(renderPosts);
});

btnAddPost.addEventListener('click', e => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    createPost(newPost, response => {
        const card = cardTemplate(response);
        container.insertAdjacentElement('afterbegin', card);
    });
});

// myHttpRequest(
//     {
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts',
//     },
//     (err, res) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(res);
//     },
// );

function http() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener("error", () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener("error", () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        }
    }
}

const myHttp = http();

myHttp.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
    },
    {
        'Content-type': 'application/json; charset=UTF-8',
    },
    (err, res) => {
        console.log(err, res);
    }
);