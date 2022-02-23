'use strict';

// const { request, response } = require('express');

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
// const { request, response } = require('express');
// const req = require('express/lib/request');
// const { handle } = require('express/lib/application');
const errorHandler = require('./error-handlers/500.js');
const errorHandler2 = require('./error-handlers/404.js');
const app = express();

// as long as built-in express middlewere and app--level are here will run on all routes 
// 1.built-in express middlewere
app.use(express.json());
app.use(cors());

// 2.app--level
app.use(logger);


// 3. route-level middleware
// http://localhost:3000/person?name= hala
app.get('/person',validator,(request,response)=>{
    response.status(200).json({
        name: request.query.name
    }) 

})


app.get('/',(request,response) => {
    response.send('home route')
})


// 404 rout handler
app.use(errorHandler2);

// 500 rout handler
app.use(errorHandler);


// start function
function start(port){
    app.listen(port,()=>{
console.log(`running on port ${port}`)
    })
}
module.exports = {
    app: app,
    start: start
}