/* Question: is palindrome string */
console.log(`---------Question 2 ---------\n`);

const input_string = prompt(`Enter The String To Check Palindrome`);

//1st Method: Using For Of Loop
const check_palindrome_using_forOf = (input_string) => {
    const char_Arr = input_string.split('');
    for (let c of char_Arr) if (c !== char_Arr.pop()) return false;
    return true;
} // Slow Method

//2nd Method: Using inbuilt function
function check_palindrome(input_string) {
    const reverse_string = input_string.split('').reverse().join(''); 
    return reverse_string === input_string;        
} // Fastest Method


console.log(`Input : ${input_string}`,
        (check_palindrome(input_string) === true && check_palindrome_using_forOf(input_string) === true) ?
        `\nInput string is palindrome` : `\nInput string is not a palindrome`);

console.log(`------------ End ------------`);