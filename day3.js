// let sentence="I am a comma separated sentence";
// let words=sentence.split(" ");
// console.log(words)

// let sentence2="I am a comma separated sentence";
// let words2=sentence2.split("a");
// console.log(words2)

// // Q1. Find out occurence of "r" in given String.

// let str="tu meri mai tera tu meri";
// let wrt=str.split("r").length-1;
// console.log(wrt)

synchronous function: we can move to other task after the previous tassk finishes its execution
asynchronous function: 


// regular function
function demo(){
    console.log("demo")
}
demo()

function sample(){
    return(a+b)
}
console.log(sample(5,10))


// // arrow function
// // advantage: doesn't need return and function keyword and it will perform asynchronously.
// const test=(c,d)=> c+d
// console.log(test(4,3))

console.log=(c,d)=> c+d;
// If we have multiple statements then we have to add return
const test=(c,d)=>{
    return=c+d;
};
console.log(test(4,6))




let arr=[1,2,3,4,5];
let res=arr.map(function(x){
    return x+2
})
console.log(res)







