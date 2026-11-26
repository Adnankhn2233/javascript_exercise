import { readFile } from "fs/promises";
import { parse } from "csv-parse/sync";
import { normalisePhone } from "./phone.js";

export type Patient = { name: string; phone: string };
export type ImportError = { row: number; reason: string };

type CsvRow = { name?: string; phone?: string };

export type ImportResult = {
    patients: Patient[];
    errors: ImportError[];
};

export async function importPatients(path: string): Promise<ImportResult> {
    const patients: Patient[] = [];
    const errors: ImportError[] = [];
    const content = await readFile(path, "utf8");

    const rows = parse(content, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        skip_records_with_error: true,
        on_skip: (err) => {
            const line = err?.lines;
            const rowNumber = typeof line === "number" ? line : 0;
            errors.push({ row: rowNumber, reason: "wrong number of columns" });
        },
    }) as CsvRow[];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        // check 1: name
        if (!row.name || row.name.trim() === "") {
            errors.push({ row: i + 2, reason: "missing name" });
            continue;
        }

        // check 2: phone
        if (!row.phone) {
            errors.push({ row: i + 2, reason: "missing phone" });
            continue;
        }

        // check 3: normalisePhone returns null
        const phone = normalisePhone(row.phone);
        if (phone === null) {
            errors.push({ row: i + 2, reason: "invalid phone" });
            continue;
        }

        patients.push({ name: row.name, phone });
    }

    return { patients, errors };
}