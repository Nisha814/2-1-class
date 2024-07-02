// function sum(n1,n2){
//     const s = n1+ n2;
//     console.log(s);
// }

// sum(20,50);
//array loop
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(i of array){
//     console.log(i);
// }

// for (i in arry){
//     console.log(i);
// }


const array =[1,2,3,4,5,6,["a",5,69],7,8,[8,9,["a0","b2"]]];
for(i in array){
        console.log("array index:", i);
    }
    // console.log(array);

    for (i of array){
        console.log("array element: ", i)
    }
    //console.log("To String Nested  Array ")