// function login(email, password, callback) {
//     setTimeout(() => {
//         callback({ userid: email,isloggedin: true , message: "Login successful"});
//     }, 3000);
// }
// login("user@example.com", "password123", (userdetails) => {
//     console.log(userdetails);
// });

function getVideolist(cb){
    setTimeout(()=>{
        cb({title:"video-1", duration:"2 min"});
    },1000);

}

function login(email, password, callback) {
    setTimeout(() => {
        callback({ userid: email,isloggedin: true , message: "Login successful"});
    }, 3000);
}
login("user@example.com", "password123", (userdetails) => {
    console.log(userdetails);
    getVideolist((videoList)=>{
        console.log(videoList);
    })
});
