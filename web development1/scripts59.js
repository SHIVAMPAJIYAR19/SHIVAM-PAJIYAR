console.log("this the faulty calculator");
// function add(a,b){
    // let num1 = parseFloat(prompt("Enter the first number:"));
    // let num2 = parseFloat(prompt("Enter the second number:"));
    // let a=10;
    // let b=20;
    var a = prompt("Enter your number a");
    var b=prompt("entert the number b");   

    console.log("the value is",a+b);

    if(a+b){
        console.log("the valu in minus",a-b);
    }
    else if  (a-b) {
        console.log("the value in minus",a+b);
   } 
    else if  (a/b) {
        console.log("the value in minus",a*b);
   } 
    else if  (a*b) {
        console.log("the value in minus",a/b);
   } 
   
   else {
        console.log("this the fault value");
    }



