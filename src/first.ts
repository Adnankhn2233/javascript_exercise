//1. for even and odd 

let num111 = 6;

if (num111%2 == 0) {

    console.log(`${num111} is even`)
}
else {
    console.log(`${num111} is odd`);
}

//2. largest of the 3 numbers 

let num1= 70;
let num2 = 100;
let num3 = 90;

if (num1 > num2 && num1 > num3)
{
console.log(`${num1} is greater number`);
}
else if (num2 > num1  && num2 > num3)
{
    console.log(`${num2} is greater number`);
    
}

else{
    console.log(`${num3} is greater number`);
}


//3. add the number from 1 to 100

var sum =0;

for (var i = 0; i<= 100; i++)
{
    sum = sum + i;
}

console.log(`Sum of the number is the ${sum}`);


//4. Fizzbuzz program 

var  i =1;

while (i <= 100)
{
    if (i % 3 == 0){
        console.log(`${i} Fizz`);
        

    }
    else if (i % 5== 0) {
        console.log(`${i} Buzz`);
    }
    else
    {
        console.log(`${i}`);
    }
    i++;
}

//5. count vowels in string 

let sentence: string= "one three five ";
let vowels: string[] = ["a", "e", "i", "o", "u"];
let count = 0;

for (let vowel of vowels) {
    for (let char of sentence){
        if (char.toLowerCase() === vowel) {
            count++;
        }
    }
}
console.log(count)

//6. reverse of the string 

let string = "adnan khan"

let newstring = string.split("").reverse().join("");

console.log(newstring);

//7. print palindrome  check
let str = "madam";
const revValue = () => {
    let temp = str.split("").reverse().join("");
    if (temp === str) {
        console.log(`${str} is palindrome`);
    }   
    else
    console.log(`  ${str} is not palindrome`);
}
revValue();

//8. multiplication table of 5

let num = 5; 

for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} * ${i} = ${result}`);
}           

//9. factorial of number

 let num11 = 5;
 let factorial = 1;   
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}` );


//10. countdown from 10 to 1

let countdown = 10;

while (countdown >= 1) {    
    console.log(countdown);
    countdown--;
}