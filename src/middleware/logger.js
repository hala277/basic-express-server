'use strict';


const logger = (request,response,next) =>{
    // req.reqDate =  new Date().toLocaleDateString();
    // console.log('logged @',req.reqDate);
    
    // console.log with the request method and path
    console.log(request.method,request.path)
    next();
}

module.exports = logger;
