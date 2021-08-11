var faker = require('faker');
const fs = require('fs')

const { random } = require('faker/locale/zh_TW');

const owners = ["Adam", "Ellise", "Falak", "Inara", "Petter", "John", "Julia", "Marck"]
const ststus = ["Closed", "Blocked", "Not Started", "In Progress", ""]

const bug = ()=>({
    name: faker.random.words(),
    details: faker.git.commitMessage(),
    steps: "open app and " + faker.random.word(),
    version:"v2.0",
    assigned:faker.name.findName(),
    creator: owners[Math.floor(Math.random() * 8)],
    priority: Math.floor(Math.random() * 3) + 1,
    status: ststus[Math.floor(Math.random() * 4)],
    time:faker.date.past()
})

const bugs = (n)=>{
    return Array.from({length: n}, bug)
}

// console.log(bugs(5));

fs.writeFile(

    './my.json',

    JSON.stringify(bugs(100)),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);