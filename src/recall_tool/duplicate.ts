import type { Patient } from "./patientsCsv.js";

export function findDuplicate(existing: Patient[], candidate: Patient): Patient | undefined {
    const candidateName = candidate.name.trim().toLowerCase();

    return existing.find(
        p => p.name.trim().toLowerCase() === candidateName && p.phone === candidate.phone
    );
}