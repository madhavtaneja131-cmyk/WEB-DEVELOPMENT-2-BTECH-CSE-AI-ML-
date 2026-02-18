console.log('Starting.....');
function doWork(cb){
    setTimeout(()=>{
        return'Working......';        
    },3000);
}
doWork((data)=>{
    console.log(data);
    
});
console.log('Finished');
