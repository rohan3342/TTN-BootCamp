/* Question: Prompt for amount, interest rate and no. of years and calculate simple interest. */
console.log(`---------Question 1 ---------`);

let principal_amount = prompt(`Enter the Amount: `);
let interest_rate = prompt(`Enter the Interest Rate: `);
let time = prompt(`Enter the Number of years: `);

let si = (principal_amount * interest_rate * time) / 100;

console.log(` Prinicpal Amount: ${principal_amount} \n Interest Rate %: ${interest_rate} \n Number Of Years %: ${time} \n The Simple Interest is: ${si}`);

console.log(`------------ End ------------`);