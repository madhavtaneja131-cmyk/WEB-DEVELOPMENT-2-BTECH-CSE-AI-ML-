function login(email, password, callback) {
    setTimeout(() => {
        callback({ userid: email,isloggedin: true , message: "Login successful"});
    }, 3000);
}

function getVideolist(user,cb){
    setTimeout(()=>{
        cb(["video-1", "video 2","video 3"])
    },2000);

}

function getVideolist(video,callback) {
    setTimeout(() => {
        callback({ title:video,duration:"2 mins"});
    }, 1000);
}

login("user@example.com", "password123", (userdetails) => {
    console.log(userdetails);    
    getVideolist(userdetails.userid,(videoList)=>{
        console.log(videoList)
        
    })
});
