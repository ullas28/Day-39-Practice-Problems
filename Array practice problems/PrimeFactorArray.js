const prompt =require('prompt-sync')();
let num = prompt("Enter a number ");
num = parseInt(num);
let flag=0;
for(let i =2; i<Math.sqrt(num); i++){
    if(num%i==0){
        for(let j=2; j<i; j++){
            if(i%j==0){
                flag=1;
            }
        }
        if(flag==0){
            console.log(i);
        }
        flag=0;
    }
}