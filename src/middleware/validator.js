'use strict';



const { request, response } = require("express");
// how?? Checks the query string for a name property
module.exports = (request,response,next) => {
    // request.name = 30;
    if(request.query.name)
    {
        next();
    }
    else{
        next('its not a name')
    }

   
}


