import { describe, expect, it } from "vitest";
import { importPatients } from "../src/recall_tool/patientsCsv";


describe("importPatients", () => {
    it("rejects a duplicate patient", async () => {
        const result = await importPatients("test/fixtures/duplicates.csv");

        expect(result.patients).toHaveLength(2);
        expect(result.errors).toHaveLength(1);
        expect(result.errors[0].reason).toBe("duplicate patient");
    });

    it("reports the real file line for a row after a skipped line", async () => {
        const result = await importPatients("test/fixtures/row-numbers.csv");

        const missing = result.errors.find((e) => e.reason === "missing name");
        expect(missing?.row).toBe(4);
    });

    it("imports the sample file with 7 patients and 5 errors", async () => {
        const result = await importPatients("patients.csv");

        expect(result.patients).toHaveLength(7);
        expect(result.errors).toHaveLength(5);
    });


})
