//1. add two numbers 
function add (num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(10, 20));

//2. even number or odd number 

function checkevenodd(num : number ): boolean {
    if (num % 2 === 0){
        console.log(`${num} is even`);
        return true;
    }
    else
    {
        console.log(`${num} is odd`);
        return false;
    }
}

console.log(checkevenodd(10));


//3. get the longest word in a string

function longestword (str : string): string {
    const words = str.split(' ');
    let longestword= '';
    for (const word of words){
        if (word.length > longestword.length){
            longestword = word;
        }
    }
    return longestword;
}
console.log(longestword('This is the longest word in the string function'));



// 4. capitalize the first letter of each word in a string
function capitalize ( str : string) : string {

    const  words = str.split(" ");
    const capital = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capital.join(" ");
}

console.log(capitalize("this is the function for the capital letter of the string"));

//5.  average of the array 

function averageofarray (array : number[]) : number {

    let sum = 0;
    for (let i =0 ; i <  array.length; i++ )
    {
        sum  += array[i];
    }
    return(sum/array.length)
}
console.log(averageofarray([1,2,3,4,5]))

//while  on the reduce function 

function averageofarray1 (arr : number[]): number {
    if (arr.length === 0)
        return 0;
    else
        return arr.reduce((sum, n) => sum+n, 0)/arr.length;
}

console.log(averageofarray1([1,2,3,4,5]))

//6. check if the string is empty or only space then return boolean 

function checkstring (str : string) : boolean {

    if (str.trim().length === 0)
        return true ;

    else
        return false;

}

console.log(checkstring(" "));
console.log(checkstring(""));
console.log(checkstring("    "));
console.log(checkstring("hi"));


