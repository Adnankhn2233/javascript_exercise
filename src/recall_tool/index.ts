import { normalisePhone } from "./phone.js";
import {
  collapseSpaces,
  removePunctuation,
  toTitleCase,
  makeSlug,
  removeDigits,
} from "../practice/string.js";

import { importPatients } from "./patientsCsv.js";

// read the csv file 
const result = await importPatients("patients.csv");
console.table(result.patients);
console.table(result.errors)

// const patients: Patient[] = [
//   { name: "azghar", phone: "0312 23 27 123" },
//   { name: "naveed", phone: "0322 23-22-123" },
//   { name: "kashif", phone: "031223-11123" },
//   { name: "humaid", phone: "0312238823" },
//   { name: "fatma", phone: "03122323993" },
//   { name: "shagufta", phone: "0312.0023123" },
//   { name: "bilal", phone: "0312233312  3" },
//   { name: "farhan", phone: "  03155323123  " },
//   { name: "qasir", phone: "  03100323123  " },
//   { name: "zainab", phone: "+92 345 1234567" },
// ];




// cleaned normalised
// const cleaned = patients.map((p) => normalisePhone(p.phone));
// console.table(cleaned);

// // collapseSpace
// console.log(collapseSpaces("             hello      world         we"));

// // removePunctuation
// console.log(removePunctuation("Hi, there! ok?, "));

// //  toTitlecase
// console.log(toTitleCase(" adnan guLL"));

// //  slug
// console.log(makeSlug("My First Slug"));

// // removeDigits
// console.log(removeDigits("abcdfc12345"));
