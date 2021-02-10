/* Question: Copy information of one object to another and log it to the console */
console.log(`---------Question 4 - Live---------`);

let origin_obj = {
    Name: {FirstName:'Rohan', LastName: 'Singh'},
    Email: 'roXXXXXX@tothenew.com',
    Mobile: '9868XXXXXX',
}
console.log(origin_obj);

//1st Method 
console.log("--- 1st Method: using '=' operator ---");
let copy_obj1 = origin_obj;
console.log(`Origin_Obj FirstName: ${origin_obj.Name.FirstName} \nCopy_Obj1 FirstName: ${copy_obj1.Name.FirstName}`);

//2nd Method
console.log("--- 2nd Method: using '...' operator ---");
let copy_obj2 = { ...origin_obj };
console.log(`Origin_Obj LastName: ${origin_obj.Name.LastName} \nCopy_Obj1 LastName: ${copy_obj2.Name.LastName}`);

//3rd Method
console.log("--- 3rd Method: using 'Object.assign()' method ---");
let copy_obj3 = Object.assign({}, origin_obj);
console.log(`Origin_Obj Mobile: ${origin_obj.Mobile} \nCopy_Obj1 Mobile: ${copy_obj3.Mobile}`);

//4th Method - Deep copy
console.log("--- 4th Method: using JSON.parse and JSON.stringify methods ---");
let copy_obj4 = JSON.parse(JSON.stringify(origin_obj));
console.log(`Origin_Obj Email: ${origin_obj.Email} \nCopy_Obj1 Email: ${copy_obj4.Email}`);

console.log("---------Question 4 - End---------");