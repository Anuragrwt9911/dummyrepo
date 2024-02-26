                    chapter 1 --> node js introduction

1. node js --> it is a javascript runtime environment it is used to run javascript outside the browser , basically the javascript only runs on the browsers because generally every browsers 
have a engine for running javascript language, such as v8 engine used by chrome etc.
most popular javascript engine is V8 engine.

V8 ENGINE + C++ ====== NODEJS


2. how node js made --> it is made by extracting the v8 engine outside the browser and 
    embedding it with the c++ language so that it can also support native machine language.

3. nodejs does not have functions which is generally used in client side like manipulating elements. showing alerts,window obj, event handlers basically it des not have all the functions which are
used in client side or relaetd to UI, because it is geenrally used as a server side programming
and used for making servers and restful apis, but some fnctions are also added to it like crytograhy etc..

4. how to execute node js in vs code --> node <filename>

5. modules in node js ->>>> it simply breaking our code into files or functions coz mostly time
we have to break our codebase into smaller parts but second file we created doesn't have 
any reference of the first file so it throw error but for that we use require keyword in nodejs


6. why do we need configuration files like package.json in node js--> bocz it helps to 
configure our node js project by some scripts and many other packages which we install 
during our nodejs project in npm 
//for eg- if we don't want to execute our file by node filename we can change the script of 
package.json to script 
start: "node main.js //for starting/executing our node js project we can directly use that cmd
so that we can directly run our project by npm start cmd;

7. file handling in nodejs - by fs module fiee system module which helps in perofrm operatons 
on files like creaate read updaet and delte operatorions 

        //important// *****
8.How node js works ---> the client --> request --> server(nodejs) then the node js
server handle the requeste by sending it to event queue(it is a queue of request made by the client to the server. every new request is stored in event queue at FIFO fashion(first in first out ) request made by client at the very first time will be execute first)
Then the request stored in event queue is goes through a event loop 
//event loop is a loop which helps emptying the event queue in a FIFO fashion.
//request pickup by a event loop in an event queue is genenrally two types : 
Blocking/sync task and non-blocking operations/request also called async task;

//if the request pickup by a event loop in a event queue is non-blocking operation then it 
//sipmlies process that request by giving a response to the client

//if the request found blocking operation by event loop then the request further goes to 
//a thread pool(thread pool is basically a kind of pool of workers which helps in processing
the blocking operations) node js says that we need a thread/worker to perofrm blocking 
operation and if the thread /worker is available(bcoz threads are limited) it process the 
blockingn task and then the thread will go to his thread pool where it has come . and return the result which is a response to the client . 

//if you perform many blocking operations by a writing blocking programs so it basically 
//goes to thread pool and assign some workers but remember thread/workers are limited
//so if there are too many blocking op. then all threads are busy and if the another user
//reuquest is found blocking he has to wait for thread to complete her task . so it 
has a problem of scalability; that's why we should always write non-blocking operations 
while working with nodejs.

                    //blocking and non-blocking operatiosn in node js
blocking operation --> also called syncrhonous task for eg. 
//in fs module
we have read operation ==> fs.readfileSync() ==> it is a blocking operation it doesn't wait for 
the result to execute it just execute immediately.

fs.readfile((err, result) => {
    console.log(result);//it is a nonblocking operations . it execute when the other functions
    executes after then it executes.
})

//default thread pool size is 4; 
//max depends upon the machine to machine(cpu cores ) lets' say if 8core cpu ==> 8 thread pool size

//in node js modules we have os module which gives the cpus cores information

