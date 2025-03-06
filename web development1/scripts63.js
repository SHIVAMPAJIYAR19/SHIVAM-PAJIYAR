console.log("this is video 63 it is array");
// this mutable
let a=[1,2,3,4,5,6,7,8,9];
let b=[3,45,67,7,8,9,9,0];
// a[0]=99;
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[3]);
// console.log(a[2]);
// console.log(a[5]);
// console.log(a[4]);
// console.log(a[6]);
// console.log(a[7]);
// console.log(a.length);;
// console.log(a.concat(a));
// console.log(a.sort());
// we can
//  a.join (and)
// a.push(2) Pop(3),lifo
//  a.shift(1) ,a.unshift(3) fifo

// a.slice(1,3,999,99999999) it can cut value in the given index range and also add the same index


// console.log(a.tostring());
// console.log(a.join("and"));

// for loop in array
// classic
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
    
// }

// a.forEach((Value, index , arr)=> {
//     console.log(Value, index , arr)
    
// });

let obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8
}


// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
        
//     }
// }


// for (const values of obj) {
//     console.log(values);
// }

const obj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

for (const value of Object.values(obj1)) {
    console.log(value);
}
