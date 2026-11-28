import { describe, it, expect} from "vitest";
import {normalisePhone} from "../src/recall_tool/phone";

describe("normalisedPhone", ()=>{
    it("Good number",()=>{
        expect(normalisePhone("03001234567")).toBe("03001234567");
    })

    it("Dashes",()=>{
        expect(normalisePhone("0300-1234567")).toBe("03001234567");
    })

    it("Spaces",()=>{
        expect(normalisePhone("0300 123 4567")).toBe("03001234567");
    })

    it("+92 form",()=>{
        expect(normalisePhone("+923001234567")).toBe("03001234567");
    })

    it("0092 form",()=>{
        expect(normalisePhone("00923001234567")).toBe("03001234567")
    })

    it("Missing leading 0",()=>{
        expect(normalisePhone("3001234567")).toBe("03001234567")
    })

    it("Too short",()=>{
        expect(normalisePhone("03001234")).toBeNull
    })

    it("Too long",()=>{
        expect(normalisePhone("0300123456789")).toBeNull
    })

    it("Wrong Short",()=>{
        expect(normalisePhone("04001234567")).toBeNull
    })

    it("Empty",()=>{
        expect(normalisePhone("")).toBeNull
    })

    it("Letters only",()=>{
        expect(normalisePhone("abc")).toBeNull
    })
    
})