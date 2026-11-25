// // String
let single = 'single_quoted';
let double = "double_quoted";
let backticks = `back ticks`;
console.log(single);
console.log(double);
console.log(backticks);

export function sum1 (a: number, b : number): number {
    return a+b;
}

console.log(`sum of the number is ${sum1(1,2)}`);

export function trim1 (str: string) {
    console.log(str.trim())
}

trim1("   hello  world   ");
