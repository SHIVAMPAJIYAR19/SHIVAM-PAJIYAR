console.log("this is iteration")

// // for loop
// for (let i = 0; i< 99; i++) {
//     console.log(i);
    
// }
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

// let i=1;
// while (i<10) {
//     console.log("iteration",i);
// i++;

    
// }



let i=1;
do{
    console.log("iteration of ",i)
i++;
}
while(i<1000);


