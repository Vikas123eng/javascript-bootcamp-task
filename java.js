// //conditionals,functional,loops
// // let Name= ["Akash","Vikas","Gita","Rita","Sandeep","Manisha","Kiran"];
// // let random=Math.floor(Math.random()*Name.length);
    
// //   let arr=[Name.length] ; 

// // //falsy=>false: 0,-0,"",'',undefined,Null

// //  Output = (arg) =>{
// //     console.log(Name[arg]);

// //     arr=[arg];

// // }
// // Output(random);
// // let max =0;
// // for(let i=0;i<Name.length;i++)
// // {
// //     max=Math.max.apply(Math,arr);
    
// // }
// // console.log(max);




// //Assignment :2
// //Part 1:
// console.log("Part 1:")
// Tocheck = (num) =>{
//   if(num>0)
//   {
//     console.log("Positive number");
//   }
//   else if(num==0)

//   {
//     console.log("Number is zero")
//   }
//   else{
//     console.log("Number is negative")
//   }
// }

// let argu=[0,1,-1,9,33889,-171]
// let random=Math.floor(Math.random()*argu.length);
// console.log(argu[random])
// Tocheck(argu[random]);


// //Part 2:
// console.log("Part 2:")
// factorial = (arg2) =>{
 
//     let result = 1;
//     for (let i = 1; i <= arg2; i++) {
//         result *= i;
//     }
//     console.log(result);
  
 
// }
// let random2=Math.floor(Math.random()*10)
// factorial(random);

// //Part 3:
// console.log("Part 3:")
// Tochecklarger = (a ,b) =>{
//   if(a-b>0)
// {
//   console.log("First number is greater than second");
// }
// else if(a-b===0){
//   console.log("Both are equal")
// }
// else{
//   console.log("Second number is greater than first")
// }

// }
// let random3=Math.floor(Math.random()*1000)
// let random4=Math.floor(Math.random()*1000)
// console.log("Num 1:"+random3)
// console.log("Num 2:"+random4)
// Tochecklarger(random3,random4)

// //Part 4:
// console.log("Part 4:")
// function isPalindrome(str) {
//   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedStr = cleanStr.split('').reverse().join('');
  
//   if (cleanStr === reversedStr) {
//       console.log(str+" is a palindrome.");        
//   } else {
//       console.log(str+" is not a palindrome.");
//   }
// }
// let sentences=["A man, a plan, a canal, Panama","naman","Goose","eye","corona","hehe"]
// let random10=Math.floor(Math.random()*sentences.length)
// isPalindrome(sentences[random10]);


// //Part 5:
// console.log("Part 5:")

// Prime = (num) => {
//   let sq = Math.sqrt(num);
//   let flag = false;
//   let i=0;
//   for ( i = 2; i <= sq; i++) {
//       if (num % i === 0) {
//           flag = true;
//           break; 
//       }
//   }

//   if (!flag) {

      
//       console.log(num)
//   } 
// }

// let random5 = Math.floor(Math.random() * 1000);
// console.log("The number is : "+random5);
// for(let j=2;j<=random5;j++){
// Prime(j);
// }

// //Part 6
// console.log("Part 6:")
// Calculator = (num1,num2,operator) =>{
//     console.log("num1:"+num1,"num2:"+num2,"operator:"+operator)
//     switch(operator){
//         case('+'):{
//             console.log("num1+num2"+"="+(num1+num2));
//             break;
//         }
//         case('-'):{
//             if(random3-random4>0){
//             console.log("num1-num2"+"="+(num1-num2));
//             }
//             else{
//                 console.log("num2-num1"+"="+(num2-num1));
//             }
//             break;
//         }
//         case('*'):{
//             console.log("num1*num2"+"="+(num1*num2));
//             break;
//         }
//         case('/'):{
//             console.log("num1/num2"+"="+(num1/num2));
//             break;
//         }
//         default:{
//             console.log("Use an operator from (+, -, *, or /):")
//         }
//     }

// }
// let operators=['+','-','/','*']
// let random9=Math.floor(Math.random()*operators.length+1)

// Calculator(random3,random4,operators[random9])

// //Part 7:
// console.log("Part 7:")
// VowelsCount = (str) =>{
//     let vowels=['a','e','i','o','u'];
//     let count=0;
//         for(let i=0;i<str.length;i++){
//             for(let j=0;j<vowels.length;j++){
//             if(str[i].toLocaleLowerCase()==vowels[j]){
//                 count++;
//             }
//             }
//         }
//         console.log("The number of vowels"+" "+count);
// }

// let sentence=["Write",  "JavaScript"," function"," that", "takes","a" ,"string", "parameter","counts" ,"number"," vowels "," string"]
// let random8=Math.floor(Math.random()*sentence.length)
// console.log("The word is "+sentence[random8]);
// VowelsCount(sentence[random8].toLocaleLowerCase());

// //Part 8:
// let random7=Math.floor(Math.random()*50)
// console.log("Part 8:")
// perfectNumber = (arg) =>{
//     let sum=0;
//    for(let i=1;i<arg;i++)
//    {
//     if(arg%i===0){
//         sum+=i;
//     }
//    }
//    if(sum==arg){
//     console.log("Perfect Number")
//    }
//    else{
//     console.log("Not a Perfect Number")
//    }
// }
// console.log("The number is :"+random7)
// perfectNumber(random7)


// //Part 9

// console.log("Part 9:")
// Fibonacci = (arg) =>{
//     let fib =[0,1];
//     for(let i=2;i<arg;i++){
//         fib[i]=fib[i-2]+fib[i-1];
//         console.log((i)+":"+fib[i])

//     }
   


// }
// Fibonacci(random7)

// //Part 10:
// console.log("Part 10")
// multiplication = (arg) =>{
//   if(arg==0)
//   {
//     console.log("Enter a positive number")
//   }
//   else{
//   for(let i=1;i<=10;i++){
//     console.log(arg+" * "+i+" "+"="+arg*i)

//   }
// }
// }

// let random6=Math.floor(Math.random()*1000)

// multiplication(random6)



//Assignment 3:

//Part 1:
console.log("Part 1:")








