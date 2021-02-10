/* Question: Create a list of objects of Employee with info as follow :
    (a) Name, age, salary ,DOB
    (b) Filter all employees with salary greater than 5000
    (c) Group employee on the basis of their age
    (d) Fetch employees with a salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
*/
console.log("---------Question 5 - Live---------");

//(a) Name, age, salary ,DOB
let data = [
    { Name: "Aayush", Age: 16, Salary: 500, DOB: "15 May 2004"  },
    { Name: "Dhruv", Age: 23, Salary: 900, DOB: "10 Dec 1997"},
    { Name: "Rohan", Age: 23, Salary: 12000, DOB: "30 Dec 1997" },
    { Name: "Sahil", Age: 19, Salary: 700, DOB: "13 Aug 2001"   },
    { Name: "Yashu", Age: 33, Salary: 1000, DOB: "10 Dec 1996"  },
    { Name: "Vibhor", Age: 23, Salary: 15000, DOB: "29 Jul 1997"}
];
console.log(data);

// (b) Filter all employees with salary greater than 5000
data.forEach(d => d.Salary > 5000 ? console.log(d.Name, d.Age, d.Salary, d.DOB):'Error!');

//(c) Group employee on the basis of their age
let groupByAge = {};
for (let d of data) {
    if (!groupByAge[d.Age]) groupByAge[d.Age] = [];
    groupByAge[d.Age].push(d);
}
console.log(groupByAge);

// (d) Fetch employees with a salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
data.forEach(d => { 
    if (d.Salary < 1000 && d.Age > 20) {
        console.log(`${d.Name} Salary Before Increment: ${d.Salary}`);
        d.Salary *= 5;
        console.log(`${d.Name} Salary After Increment: ${d.Salary}`);
    }
});


console.log("---------Question 5 - End---------");