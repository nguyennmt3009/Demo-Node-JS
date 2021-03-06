const express = require('express');
const app = express();

const express_graphql = require('express-graphql');

const {schema, rootValue} = require('./database/schema')


app.use('/graphql', express_graphql({
    schema,
    rootValue,
    graphiql: true
}));


app.listen(3000, () => console.log('Server is listening at port 3000...'));