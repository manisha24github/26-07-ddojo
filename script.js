/*console.log('hello java')
// alert('hello')
// alert('hey there')

// ["hey there!", "hello again"].forEach(alert)

alert("error message");
["hey there!", "hello again"].forEach(alert);*/

//check if value is an even number

/*function num (value){
    if(value%2 == 0){
        console.log(true);
    }     else{
        console.log(false);
    }
}
num(2);*/

// function isEven(value){
//     if(value%2 ==0){
//         console.log("Even Number");
//     }
//     else{
//         console.log("Odd Number");
//     }
// }
// isEven(2);
// /**
//  * 
//  * @param {number} num1 The number to raise
//  * @param {number} num2 The Power to be raised by
//  * @returns 
//  */
// function power(num1, num2){
//     return Math.pow(num1,num2);
// }
// console.log(power(5,3)); //5X5X5=125

// function plus(a,b){
//     return(a+b);
// }
// alert(plus(10,10));
// console.log(confirm("continue learning Js"));


function hacked(){
    document.getElementById("manisha").innerHTML="That the page had been hacked.";
}
const myTimeout = setTimeout(hacked, 3000);