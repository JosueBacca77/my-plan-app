import { create } from 'zustand';
import { StudentInterface } from '../../interfaces/Student.interface';
import { PlanInterface } from '../../interfaces/plan/Plan.interface';

type StudentStore = {
  student: StudentInterface | null;
  selectedPlan: PlanInterface | null;
  setStudent: (student: StudentInterface) => void;
  setSelectPlan: (plan: PlanInterface) => void;
};

const useStudentStore = create<StudentStore>((set) => ({
  student: null,
  selectedPlan: null,
  setStudent: (student: StudentInterface) => set((state) => ({ ...state, student: student })),
  setSelectPlan: (plan: PlanInterface) => set((state) => ({ ...state, selectedPlan: plan })),
}));

export default useStudentStore;