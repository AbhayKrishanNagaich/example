let a1 = 10;
console.log(typeof(a1));


function vol(r){
    return 4/3*Math.PI*r*r*r;
}
console.log(vol(5));

// arrow function---------=>
    let crim1=r=>2*Math.PI*r;
console.log(crim1(4));

function areaOfCircle(r) {
    return Math.PI * r * r;
}

function volumeOfSphere(r) {
    return (4 / 3) * Math.PI * Math.pow(r, 3);
}

function circumference(r) {
    return 2 * Math.PI * r;
}

// Array of radii
let radii = [1, 2, 3, 4, 5, 6];


radii.forEach(r => {
    console.log(`Radius: ${r}`);
    console.log(`Area of Circle: ${areaOfCircle(r).toFixed(2)}`);
    console.log(`Volume of Sphere: ${volumeOfSphere(r).toFixed(2)}`);
    console.log(`Circumference: ${circumference(r).toFixed(2)}`);
    console.log('---------------------------');
});

let arr = [1, 2, 3, 4, 4];


let m=arr.map((e) => {
    return e*2;
})

console.log(m);

let m1=arr.map(e=>e*2);


let d=arr.filter((e)=>{
return e%2==0
})
console.log(d);

// git init
// git status 
//