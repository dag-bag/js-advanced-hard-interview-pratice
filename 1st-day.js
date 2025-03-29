console.log(1);
debugger
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => setTimeout(()=> console.log(3),0));
console.log(4);

// OUTPUT 
1
4
3
2