let myPromise=new Promise(()=>{
    let data = "this is my data";
    if(data){
        res(data);

    }else{
        rej("error: no data found");
    }
});
console.log(myPromise);
