// let fruits=["Apples","Banana","Cherry","Addy","Eldberry"];
// let newlength=fruits.push("fig","grape");
// console.log(fruits);
// console.log("New length of the array: "+ newlength;)


// let fruits=["Apples","Banana","Cherry","Addy","Eldberry"];
// let new_length=fruits.pop();
// console.log(removed);
// console.log(fruits)

// Q1.
// let arr=[1,2,3,4,5];
// let rev=[];
// while(arr.length > 0){
//     rev.push(arr.pop())
// }    
// console.log(rev)
// console.log(arr.pop())

// Q3. Remove all negative numbers?
// let arr=[-2,-1,0,1,2];
// let rec=[];
// while(arr.length>0){
//     let val=arr.shift();
//     if(val>0){
//         rec.push(val);
//     }

// }
// console.log(rec)


// Q4.      
function palindrome(){ 

    let arr=[1,2,3,4,5];
    let original=[]
    let reverse=[]
    for(let i=0;i<arr.length;i++){
        original.push(arr[i]);
          
    }
    while(arr.length>0){
        reverse.push(arr.pop())
    }
    for(let i=0;i<original.length;i++){
        if(original[i]!==reverse[i]){
            return"not a palindrome"
        
        }
    
    }
    return "palindrome"
    }
    console.log(palindrome())

Task to bve done
Q4. Remove all duplicate elements from an array
Q5. Split even and odd numbers from an given array
Q6. Move all zeros to end . 