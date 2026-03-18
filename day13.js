// Callstack and Execution context.
// Every browser has Javascript engine which executes the code.
// Promises has three states: pending, fulfilled, and rejected.
// Promises are used to handle asynchronous operations better than callbacks hell.
// If promise is fullfill then it will go to .then() .
// If promise is rejected then it will go to .catch() to handle the error.
// Promises are predefined methods.

let pro = new Promise((resolve , reject)=>{
    let proposal = "false"
    if(proposal==="true"){
        resolve()
    }else{
        reject()
    }
})
pro.then(()=>console.log("proposal accepted"))
.catch(()=>console.log("proposal rejected"))