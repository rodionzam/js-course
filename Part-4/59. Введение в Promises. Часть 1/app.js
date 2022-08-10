const promis = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 5000);
});

console.log(promis);
promis.then(x => {
    console.log(x);
    return x;
})
    .then(y => console.log(y))
    .catch(err => console.log(err));

promis.then(z => console.log(z));