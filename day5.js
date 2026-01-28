// var a=10;
// console.log(x);
// function test(){
//     let y=10;
//     console.log(y);

// }
// test();


// let user={
//     fullname : "Madhav Taneja",
//     address : "xyz",
//     mobile : "7667######",
//     favcolor : ["black","white"]
// }

// console.log(user.favcolor[1]);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


const car={
    make: "Mahindra",
    model: "Thar"


};
// object.freeze(car);
object.seal(car)
car.model="XEV9E"
car.color="Blue"; // This property addition  is ignored 
console.log(car);