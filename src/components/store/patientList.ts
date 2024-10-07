import { create } from "zustand";
import type { Patient } from "../../type/patientType";

type PatientState = {
  patientList: Patient[];
  setPatientList: (patient: Patient[]) => void;
};

export const usePatientStore = create<PatientState>((set) => ({
  patientList: [],
  setPatientList: (patient: Patient[]) => set(() => ({ patientList: patient })),
}));
