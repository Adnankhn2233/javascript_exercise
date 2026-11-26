// type Patient  = {name : string; phone : string};

// const  patients: Patient[] =[
//     {name: "azghar", phone: "0312 23 27 123" },
//     {name: "naveed", phone: "0322 23-22-123" },
//     {name: "kashif", phone: "031223-11123" },
//     {name: "humaid", phone: "0312238823" },
//     {name: "fatma", phone: "03122323993" },
//     {name: "shagufta", phone: "0312.0023123" },
//     {name: "bilal", phone: "0312233312  3" },
//     {name: "farhan", phone: "  03155323123  " },
//     {name: "qasir", phone: "  03100323123  " },
//     {name: "zainab", phone: "+92 345 1234567" },
// ]

// import { normalisePhone } from "./phone";
// // filter 
// function filterByPrefix(patients: Patient[]): Patient[] {
//   return patients.filter( p => p.phone.startsWith("0312"));
// }

// // console.log(filterByPrefix(patients))

// // sort 
// function sortthepatient(patients : Patient[]) : Patient[] {
//     return [...patients].sort(( x, y ) => x.name.localeCompare( y.name ));
// }

// // console.log((patients));
// // console.table(patients)


// // count 
// function countPatient(p : Patient[]) : number {
//     return p.filter(p => normalisePhone(p.phone) !==null).length;
// }

// console.log(countPatient(patients));



// // 2 sum 

//  function twoSum(nums: number[], target: number) : number[] | null {
//     let mp = new Map<number,number>();

//     for (let i =0; i < nums.length ; i++)
//     {
//         let rem = target - nums[i];
//         if(mp.has(rem))
//         {
//             return [mp.get(rem)!,i];
//         }
//         else
//             mp.set(nums[i],i);
//     }
//     return null;
// }

// console.log(twoSum([2,3,4],6))

