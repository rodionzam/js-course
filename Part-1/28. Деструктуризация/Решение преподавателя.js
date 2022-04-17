/*
* Задание 1
*/

//  function getFirstAndOther(first, ...other) {
//    return {
//      first, other
//    }
//  }

const getFirstAndOther = (first, ...other) => ({ first, other });

console.log(getFirstAndOther(2, 3, 5,6))

/*
* Задание 2
*/

const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
};

function getInfo(
    {
        name = 'Unknow',
        info: { partners: [first = 'none', second = 'none'] = [] } = {}
    } = {}
) {
    console.log(`Name: ${name}`);
    console.log(`Partners: ${first}, ${second}`);
}

getInfo(organisation)
getInfo()

/*
* Задание 3
*/

let user = {
    guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
    isActive: false,
    balance: "$2,474.46",
    age: 30,
    eyeColor: "blue",
    fullName: "Tameka Maxwell",
    gender: "female",
    company: "ENOMEN",
    email: "tamekamaxwell@enomen.com",
    phone: "+1 (902) 557-3898",
    tags: ["aliquip", "anim", "exercitation", "non"],
    friends: [
        {
            id: 0,
            name: "Barber Hicks"
        },
        {
            id: 1,
            name: "Santana Cruz"
        },
        {
            id: 2,
            name: "Leola Cabrera"
        }
    ],
};

const {
    name = '',
    email = '',
    balance = '',
    tags: [firstTag = '', , , lastTag = ''] = [],
    friends: [{ name: friendName = '' }] = []
} = user;

console.log(name, email, balance, firstTag, lastTag, friendName)

/*
* Задание 4
*/

const newArr = [...user.tags, ...user.friends];