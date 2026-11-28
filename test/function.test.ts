import { describe, it, expect } from "vitest";
import {add, averageofarray1, capitalize, checkstring, longestword, } from "../src/practice/function"

describe("add", () => {         
  it("adds two numbers", () => { 
    expect(add(2, 3)).toBe(5);   
  });
});

describe("longestword", () => {
    it("returns empty string for null", () => {
  expect(longestword(null)).toBe('');
});

it("returns empty string for empty string", () => {
  expect(longestword('')).toBe('');
});
})

describe("capitalize", () => {
  it("capitalizes the first letter of each word", () => {
    expect(capitalize("hello world")).toBe("Hello World");
  });

  it("returns an empty string for an empty string", () => {
    expect(capitalize('')).toBe('');
  });

  it("keeps a word that is already capitalized", () => {
   expect(capitalize("Hello World")).toBe("Hello World");
  });
});


describe("averageofarray1",()=>{
    it("Normal average",()=>{
        expect(averageofarray1([1,2,3,4,5])).toBe(3);
    })
    it("One item",()=>{
        expect(averageofarray1([5])).toBe(5)
    })
    it("empty",()=>{
        expect(averageofarray1([])).toBe(0)
    })
    it("negative", ()=>{
        expect(averageofarray1([-1,-2,-3])).toBe(-2)
    });
    it("mixed, sums to zero",()=>{
        expect(averageofarray1([-5,+5])).toBe(0)
    })
    it("decimal result",()=>{
        expect(averageofarray1([1,2])).toBe(1.5)
    })
})

describe("checkstring",()=>{
    it("normal text",() => {
        expect(checkstring("hi")).toBe(false)
    });
    it("Empty",()=>{
        expect(checkstring("")).toBe(true)
    });
    it("only spaces",()=>{
        expect(checkstring("  ")).toBe(true)
    });
    it("text with spaces around",() =>{
        expect(checkstring(" hi ")).toBe(false)
    });
    it("Tab and newline only",()=>{
        expect(checkstring("\t\n")).toBe(true);
    })
})


