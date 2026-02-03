// const profile=document.getElementById("profile");
// profile.style.backgroundColor="tomato";
// profile.style.textAlign="center";
// profile.style.padding="15px";

// //  Task 2
// const highlight = document.getElementsByClassName("important");
// console.log(highlight)
// for(let i=0; i<highlight.length; i++){
//     highlight[i].style.color="red"
    
// }

// task 3 
// const task3 =document.getElementsByTagName("p");
// console.log(task3);
// for(let i=0;i<task3.length; i++){
//     if(i%2===0){
//         task3[i].style.color="blue";
//     }
//     else{
//         task3[i].style.color="red";
//     }
// }
// task3[task3.length-1].style.fontWeight="bold";

// task 4

// const task4=document.querySelector(".box")
// task4.style.backgroundColor="cyan";
// task4.style.color="blue";

// const task4=document.querySelectorAll(".box")
// for(let i=0; i<task4.length;i++){
//     task4[i].style.backgroundColor="cyan";

// }
// task4.textContent="I am first box";

// task4.style.color="blue";


// task 5
const section=document.getElementById("content");

const task5=section.querySelectorAll("p");
for(let i=0;i<task5.length;i++){
    task5[i].style.color="purple";
}
