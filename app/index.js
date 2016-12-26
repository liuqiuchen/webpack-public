/*const str = require('./app.js');
document.body.innerHTML = '<div>' + str + '</div>';*/

/*define(['./app.js'], function (str) {
    document.body.innerHTML = '<div>' + str + '</div>';
});*/
const style = require('./css/style');
const str = require('./app');

document.body.innerHTML = '<div>' + str + '</div>';
