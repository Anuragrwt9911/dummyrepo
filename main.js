// console.log("hello")
// console.log(window)//it shows windows is not defined bcoz it remove all client side functions
const math = require("fs")//built in modules eg file system (fs) module
// const math = require("./math")//if {/.} current directory not mention then it shows error
// const {addFn , subFn} = require("./math")//we can also destructure the object and we can direcly use subfn and addfn

console.log(math)//it returns empty object bcoz we have also export that function bocz at this 
//time it is private we have to make it public so that everyone can use that function for 
//that we use module object 

console.log(math)//it shows that it has a function named add {function : add}, but if we have
//multiple exports we generally make an object of modules.exports and add all the functions 
//which we want to export .
console.log("add function", math.addFn(2, 4));//we only use add function in this case
console.log("sub Function", math.subFn(9,3));//subfn 