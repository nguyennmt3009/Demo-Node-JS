var {buildSchema} = require('graphql');

const schema = buildSchema(`
type Query {
    allUser : [User],
    login(username: String, password: String) : User
}

type User {
    id: Int
    fullname: String
    username: String
    password: String 
}
`);

const rootValue = {
    allUser: () => UserData,
    login: (args) => UserData.find(user => user.username === args.username && user.password === args.password)
    
}

module.exports = {
    schema,
    rootValue
}

var UserData = [
    {
        id: 1,
        fullname: 'Alibaba',
        username: 'alibaba',
        password: '123456'
    },
    {
        id: 2,
        fullname: 'Blibaba',
        username: 'blibaba',
        password: '123456'
    },
    {
        id: 3,
        fullname: 'Clibaba',
        username: 'Clibaba',
        password: '123456'
    },
    {
        id: 4,
        fullname: 'Dlibaba',
        username: 'dlibaba',
        password: '123456'
    },
    {
        id: 5,
        fullname: 'Elibaba',
        username: 'elibaba',
        password: '123456'
    },
]

