
function add (a, b){
    return a +b ;
}

function sub(a, b){
    return a-b;
}

// module.exports = "anurag";
// module.exports = add;

module.exports = {//this is default exports//u can use one time and add functions everytime  a new func you have to export
    addFn : add, 
    subFn : sub,
}
//we can also remove the name addFn and subFn and only write this add, sub , and for using 
//that function we can simply use math.sub and math.add(2,4)

//multiple exports(using exports object)
//u can use this multiple times
exports.add = (a, b) => a+b;//both are anynymous functions because .add is the property it does'thae a name
exports.sub = (a, b) => a-b;