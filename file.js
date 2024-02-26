//file handling in node js using fs module (file system) 
const { isUtf8 } = require("buffer");
const fs = require("fs");
const fs = require("os")//gives info abou tour machine 
console.log(os.cpus().length)

//creating a file --> 

//syncrhonous call
fs.writeFileSync('./test.text','hey there');//sync means syncrhonous call// we have to create a file
//in a test.text in current directory and mention what we have to write over there ;

//async calll
fs.writeFile("./test.text", 'hello world async', (err) => {})//it is async call and it takes a 
//callback function which done some work

//for reading a file : --but it overwrite your data

//sync operation on file
const result = fs.readFileSync("./contacts.txt", "utf-8");// it takes encoding because you have decode 
//various types of file and you have to provide a enconding to decode it.
console.log(result);//it reads our files and give data

//async operations call --> it doesn't return anything , it provides err and result callback
//parameters which helps in returing err and result if any , we don't store async operatons call
//in a variable bcoz it does have callbacks

fs.readFileSync("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log("error",err);
    } else{
        console.log(result);
    }
});
//appending data into a file --> it appends data curing overwrting of data

fs.appendFileSync("./test.txt",`${Date.now()} : Hey there\n`)//used for adding server logs like when 
//the user downoad this file let say 5 am kind of sever logs, we can also create a log of ip
//address and which file he downloaded , these are the uses cases of appending

//copy the file
fs.cpSync('./test.txt', './copy.txt')//file where new copy is saved

//delete the file
fs.unlinkSync('./copy.txt')

//statistics of file
console.log(fs.statSync('./test.txt'));//shows stats about the file like when it was created
//changes, size, etc.

//making a new directory
fs.mkdirSync("my-docs");//creates a new folder

//you can perform many operations on files 

