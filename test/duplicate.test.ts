import { describe, it, expect } from "vitest";
import { findDuplicate } from "../src/recall_tool/duplicate";
import type { Patient } from "../src/recall_tool/patientsCsv";

describe("findDuplicate", () => {
  it("returns the existing patient when name and phone both match", () => {
    const existing = [{ name: "Ali", phone: "03001234567" }];
    const candidate = { name: "Ali", phone: "03001234567" };

    expect(findDuplicate(existing, candidate)).toEqual(existing[0]);
  });
  it("same name different phone",()=>{
    const existing = [{ name: "Ali", phone: "03001234567" }];
    const candidate = { name: "Ali", phone: "03007654321" };

    expect(findDuplicate(existing, candidate)).toBeUndefined()
  })
  it("different name same phone",()=>{
    const existing = [{ name: "Ali", phone: "03001234567" }];
    const candidate = { name: "Ahmad", phone: "03001234567" };
    expect(findDuplicate(existing,candidate)).toBeUndefined()
  })
  it("empty existing",()=>{
    const existing: Patient[] = [];
    const candidate = {name :"Ali",phone : "03001234567"}
    expect(findDuplicate(existing,candidate)).toBeUndefined()
  })
  it("extra spaces around the name",()=>{
    const existing =[{ name: "Ali", phone: "03001234567" }]
    const candidate = {name : " Ali ",phone : "03001234567"}
    expect(findDuplicate(existing,candidate)).toEqual(existing[0])
  })


});