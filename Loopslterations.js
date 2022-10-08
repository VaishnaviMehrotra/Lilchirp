// ## Level 2

// ---

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6

// **Output:**

// ```
// 0 1 1 2 3 5 8
// Sum: 20


function fibonacci(st){
    var fib=[]
   fib[0]=0;
   fib[1]=1;
  var res= fib[0]+ fib[1];
  
  
  for(var i=2;i<=st;i++){
    fib[i]=fib[i-1]+fib[i-2]
   res+=fib[i]
  }
return res
  
}
console.log(fibonacci(6))