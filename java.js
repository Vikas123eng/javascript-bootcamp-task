//conditionals,functional,loops
// let Name= ["Akash","Vikas","Gita","Rita","Sandeep","Manisha","Kiran"];
// let random=Math.floor(Math.random()*Name.length);
    
//   let arr=[Name.length] ; 

// //falsy=>false: 0,-0,"",'',undefined,Null

//  Output = (arg) =>{
//     console.log(Name[arg]);

//     arr=[arg];

// }
// Output(random);
// let max =0;
// for(let i=0;i<Name.length;i++)
// {
//     max=Math.max.apply(Math,arr);
    
// }
// console.log(max);




//Assignment :2
//Part 1:
console.log("Part 1:")
Tocheck = (num) =>{
  if(num>0)
  {
    console.log("Positive number");
  }
  else if(num==0)

  {
    console.log("Number is zero")
  }
  else{
    console.log("Number is negative")
  }
}

let argu=[0,1,-1,9,33889,-171]
let random=Math.floor(Math.random()*argu.length);
console.log(argu[random])
Tocheck(argu[random]);


//Part 2:
console.log("Part 2:")
factorial = (arg2) =>{
 
    let result = 1;
    for (let i = 1; i <= arg2; i++) {
        result *= i;
    }
    console.log(result);
  
 
}
let random2=Math.floor(Math.random()*10)
factorial(random);

//Part 3:
console.log("Part 3:")
Tochecklarger = (a ,b) =>{
  if(a-b>0)
{
  console.log("First number is greater than second");
}
else if(a-b===0){
  console.log("Both are equal")
}
else{
  console.log("Second number is greater than first")
}

}
let random3=Math.floor(Math.random()*1000)
let random4=Math.floor(Math.random()*1000)
console.log("Num 1:"+random3)
console.log("Num 2:"+random4)
Tochecklarger(random3,random4)

//Part 4:
console.log("Part 4:")
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  
  if (cleanStr === reversedStr) {
      console.log(str+" is a palindrome.");
  } else {
      console.log(str+" is not a palindrome.");
  }
}
isPalindrome("A man, a plan, a canal, Panama");


//Part 5:
console.log("Part 5:")
prime = (num) => {
  let sq = Math.sqrt(num);
  let flag = false;

  for (let i = 2; i <= sq; i++) {
      if (num % i === 0) {
          flag = true;
          break; 
      }
  }

  if (flag) {
      console.log("Not a prime number");
  } else {
      console.log("A prime number");
  }
}

let random5 = Math.floor(Math.random() * 1000);
console.log(random5);
prime(random5);

//Part 8:
console.log("Part 8:")
perfectNumber = (arg) =>{
    let sum=0;
   for(let i=1;i<=arg;i++)
   {
    if()
   }
}


//Part 9
let random7=Math.floor(Math.random()*50)
console.log("Part 9:")
Fibonacci = (arg) =>{
    let fib =[0,1];
    for(let i=2;i<arg;i++){
        fib[i]=fib[i-2]+fib[i-1];
        console.log((i)+":"+fib[i])

    }
   


}
Fibonacci(random7)

//Part 10:
console.log("Part 10")
multiplication = (arg) =>{
  if(arg==0)
  {
    console.log("Enter a positive number")
  }
  else{
  for(let i=1;i<=10;i++){
    console.log(arg+" * "+i+" "+"="+arg*i)

  }
}
}

let random6=Math.floor(Math.random()*1000)

multiplication(random6)