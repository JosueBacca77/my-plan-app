import { create } from 'zustand';
import { StudentInterface } from '../../../interfaces/Student.interface';


type StudentsStore = {
  students: StudentInterface[];
  student: StudentInterface | null;
  setStudents: (students: StudentInterface[]) => void;
  fetchStudents: () => Promise<void>;
  selectStudent: (student: StudentInterface) => void;
};

const useStudentsStore = create<StudentsStore>((set) => ({
  students: [],
  student: null,
  fetchStudents: async () => {
    // Fetch chats from the API and update the state
  },
  setStudents: (students: StudentInterface[]) => set((state) => ({ ...state, students: students })),
  selectStudent: (student: StudentInterface) => set((state) => ({ ...state, student: student })),
}));

export default useStudentsStore;