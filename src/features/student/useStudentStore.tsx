import { create } from 'zustand';
import { StudentInterface } from '../../interfaces/Student.interface';

type StudentStore = {
  student: StudentInterface | null;
  setStudent: (student: StudentInterface) => void;
};

const useStudentStore = create<StudentStore>((set) => ({
  student: null,
  setStudent: (student: StudentInterface) => set((state) => ({ ...state, student: student })),
}));

export default useStudentStore;